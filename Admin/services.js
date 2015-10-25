/**
 * Created by 02483138 on 24.10.2015.
 */
var servicesModule=angular.module("services",["ngCookies"]);
servicesModule.factory("authService", [
    "$http", "$location", "$cookieStore", "$q", function ($http, $location, $cookieStore, $q) {
        var _isLoggedIn;

        var _isAuthChecked;

        var _isLogged = function () {
            return _isLoggedIn;
        };

        var _isChecked = function () {
            return _isAuthChecked;
        };

        var _getCurrentUser = function () {
            if ($cookieStore.get("currentUser") == null) {
                $http.post('//GetCurrentUser/')
                    .then(function (result2) {
                        $cookieStore.put('currentUser', result2.data);
                        _isLoggedIn = true;//result.data == "false" ? false : true;
                        _isAuthChecked = true;
                        return result2.data;
                    });
            }

            return $cookieStore.get("currentUser");
        };

        var _checkIsLoggedIn = function () {
            var deferred = $q.defer();

            $http.post('/Home/IsLoggedIn/')
                .then(function (result) {
                    if ($cookieStore.get("currentUser") == null && (result.data || result.data == "true")) {
                        $http.post('/Home/GetCurrentUser/')
                            .then(function (result2) {
                                $cookieStore.put('currentUser', result2.data);
                                _isLoggedIn = result.data == "true";
                                _isAuthChecked = true;
                                deferred.resolve(_isLoggedIn);
                            });
                    } else {
                        _isLoggedIn = result.data == "true";
                        _isAuthChecked = true;
                        deferred.resolve(_isLoggedIn);
                    }
                });
            return deferred.promise;
        };

        var _login = function (username, password) {
            if (!_isLoggedIn) {
                //TODO Kullan?c? Ad? ve ?ifreyi bo? gönderemiyecek Canl?ya geçince Düzeltilecek
                Metronic.blockUI({ animate:true});
                $http.post('/Home/LoginByEmail/', { username: username, password: password })
                    .then(function (result) {
                        // Successful
                        if (result.data) {
                            $http.post('/Home/GetCurrentUser/')
                                .then(function (result2) {
                                    $cookieStore.put('currentUser', result2.data);
                                    Metronic.unblockUI($(".page-content"));
                                    $location.path("/");
                                });
                        }

                    });
            } else
                $location.path("/");
        };



        var _logout = function () {
            $http.post('/Home/DoLogout/')
                .then(function (result) {
                    $cookieStore.remove('currentUser');
                    _isLoggedIn = false;
                    location.reload();
                });

        };

        return {
            login: _login,
            isLogged: _isLogged,
            getCurrentUser: _getCurrentUser,
            logout: _logout,
            checkIsLoggedIn: _checkIsLoggedIn,
            isChecked: _isChecked,
            isAuthorized: _isAuthorized,
            forgot: _forgot
        };
    }
]);