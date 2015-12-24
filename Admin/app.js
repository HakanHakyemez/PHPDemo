/**
 * Created by 02483138 on 24.10.2015.
 */
var adminModule=angular.module("admin",["ui.router","services","oc.lazyLoad"]);
adminModule.config(function($stateProvider, $urlRouterProvider, $httpProvider){
    var checkIsLoggedIn = function (authService, $location) {
        if (authService.checkIsLoggedIn())
            return true;
        else
            $location.path("/login");
    };

    $urlRouterProvider.otherwise("/visitor");
    $stateProvider
        .state('main', {
            templateUrl: "main.html",
            controller: "mainCtrl",
            resolve: {
                checkIsLoggedIn:checkIsLoggedIn,
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: "login.html",
            controller:"loginCtrl"

        })
        .state('main.home', {
            url: "/",
            templateUrl: "App/Home/admin.html",
            controller: "adminCtrl",
            resolve: {
                checkIsLoggedin: checkIsLoggedIn,
                loadModule:[
                    "$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("App/Home/admin.js")
                    }
                ]
            }
        })
        .state('main.newsrequest', {
            url: "/newsrequest",
            templateUrl: "App/Newsrequest/newsrequest.html",
            controller: "newsrequestCtrl",
            resolve: {
                checkIsLoggedin: checkIsLoggedIn,
                loadModule:[
                    "$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("App/Newsrequest/newsrequest.js")
                    }
                ]
            }
        })
        .state('main.visitor', {
            url: "/visitor",
            templateUrl: "App/Visitor/visitor.html",
            controller: "visitorCtrl",
            resolve: {
                checkIsLoggedin: checkIsLoggedIn,
                loadModule:[
                    "$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("App/Visitor/visitor.js")
                    }
                ]
            }
        })
    ;
});

adminModule.controller("loginCtrl",function($scope,$http,authService){
    $scope.auth=authService;
    $scope.test="test";
});

adminModule.controller("mainCtrl",function($scope,$http,authService){
    $scope.auth=authService;
    $scope.test="test";
});