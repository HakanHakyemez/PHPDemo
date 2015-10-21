/**
 * Created by 02483179 on 21.10.2015.
 */
var appModule = angular.module("app", ["ui.router", "constants", "services", "ngCookies"]);

//#region UserInfoMethods
appModule.config(function ($stateProvider, $urlRouterProvider) {

    var checkIsLoggedin = function (authFactory, $location) {
        if (authFactory.checkIsLoggedin())
            return true;
        else
            $location.path("/login");
    };

    $urlRouterProvider.otherwise("/");
    //#region stateProvider
    $stateProvider
        .state('main', {
            templateUrl: "/App/main.html",
            controller: "mainCtrl",
            resolve: {
                checkIsLoggedin: checkIsLoggedin,
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: "/App/login.html",
            controller: 'loginCtrl'
        })
    //#endregion

});
appModule.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});
//#endregion

//#region LoginController
appModule.controller("loginCtrl", function ($scope, $http, authFactory, $location, $cookies, COOKIE_NAME) {
    if ($cookies.COOKIE_NAME != null || typeof ($cookies.COOKIE_NAME) != "undefined")
        $location.path("/");
    $scope.authFactory = authFactory;

    if ($location.$$path != "/login") {
        $scope.$parent.bodyClass = 'hold-transition skin-blue layout-top-nav';
    } else {
        $scope.$parent.bodyClass = 'login-page';
    }

});
//#endregion

//#region indexController
appModule.controller("indexCtrl", function ($scope, $http, authFactory) {
    $scope.temp = 555;
    $scope.$parent.bodyClass = 'hold-transition skin-blue layout-top-nav';
    $scope.currentSchool = authFactory.getCurrentUser();
    $scope.authFactory = authFactory;


});
//#endregion

