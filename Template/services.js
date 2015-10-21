/**
 * Created by 02483179 on 21.10.2015.
 */
var serviceModule = angular.module("services", ["constants", "ngCookies"]);
serviceModule.factory("authFactory", function ($http, $cookies, $location, COOKIE_NAME) {
    var _checkIsLoggedin = function () {
        if ($cookies.COOKIE_NAME != null || typeof ($cookies.COOKIE_NAME) != "undefined")
            return true;
        else
            $http.post("/Home/IsLoggedIn").success(function (result) {
                if (result != false) {
                    _getCurrentUser();
                    return true;
                }
                return false;
            });
        return false;
    };
    var _getCurrentUser = function () {
        if ($cookies.COOKIE_NAME != null || typeof $cookies.COOKIE_NAME != "undefined")
            return JSON.parse($cookies.COOKIE_NAME);
        else {
            $http.post("/Home/GetCurrentUser").success(function (result) {
                if (result != false) {
                    $cookies.COOKIE_NAME=JSON.stringify(result);
                    return result;
                }
                return null;
            });
        }
        return null;
    }
    var _login = function (loginModel) {
        if (!!loginModel) {
            $.blockUI({ message: '<i class="fa fa-refresh fa-spin fa-2x" style="color:white"></i>' });

            $http.post("/Home/Login", loginModel).success(function (result) {
                if (result != false) {
                    $cookies.COOKIE_NAME = JSON.stringify(result);

                    $.unblockUI();
                    toastr["success"]("Login Successful");

                    //toastr.success("Giri? Ba?ar?l?");
                    $location.path("/home");
                } else {

                    toastr.error("Hatal? Kullan?c? Ad? ?ifre");
                }
            });
        }
    };
    var _isAuthorize = function () { };
    var _logout = function () {
        $http.post("/Home/DoLogout").success(function (result) {
            if (result == true) {
                $cookies.remove(COOKIE_NAME);
                _checkIsLoggedin();
                window.location.reload();
            }
        });
    };
    return {
        getCurrentUser: _getCurrentUser,
        checkIsLoggedin: _checkIsLoggedin,
        login: _login,
        isAuthorize: _isAuthorize,
        logout: _logout
    }
});