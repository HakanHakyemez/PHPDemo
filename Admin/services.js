/**
 * Created by 02483138 on 24.10.2015.
 */
var servicesModule=angular.module("services",['ngCookies']);
servicesModule.factory("authService",function ($http, $location, $cookies, $q) {
        var _isLoggedIn;

        var _isAuthChecked;

        var _isLogged = function () {
            return _isLoggedIn;
        };

        var _isChecked = function () {
            return _isAuthChecked;
        };

        var _getCurrentUser = function () {
            return $cookies.get("currentUser");
        };

        var _checkIsLoggedIn = function () {

            var check=$cookies.get("currentUser") == undefined || $cookies.get("currentUser") == "undefined" || $cookies.get("currentUser")==null;
           return !(check);
        };

        var _login = function (username, password) {
            $.blockUI();
                $http.post('PHP/Login/Handler_Login.php', { username: username, password: password })
                    .then(function (result) {
                        // Successful
                        if (result.data==false || result.data=="false") {
                            $.unblockUI();
                             toastr.error("Kullanıcı Bulunamadı");

                        }else
                        {

                            $.unblockUI();
                            toastr.success("Giriş Başarılı");
                            $cookies.put('currentUser', result.data);
                            $location.path("/");
                        }

                    });

        };


        var _logout = function () {
            $cookies.remove('currentUser');
            _isLoggedIn = false;
            location.reload();
            //$http.post('/Home/DoLogout/')
            //    .then(function (result) {
            //
            //    });

        };

        return {
            login: _login,
            isLogged: _isLogged,
            getCurrentUser: _getCurrentUser,
            logout: _logout,
            checkIsLoggedIn: _checkIsLoggedIn,
            isChecked: _isChecked,
        };
    });