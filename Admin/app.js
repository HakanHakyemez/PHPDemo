/**
 * Created by 02483138 on 24.10.2015.
 */
var adminModule=angular.module("admin",["ui.router","services","ngCookies"]);
adminModule.config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            controller: 'loginCtrl'
        })
        .state('main', {
            templateUrl: "/App/main.html",
            controller: 'loginController',

        })
        .state('main.index', {
            url: "/",
            templateUrl: "/App/Dashboard/Templates/index.html",
            controller: 'dashboardController',
            title: "Anasayfa",
            resolve: {

                deps: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'allianz',
                            files: ['/App/Dashboard/Scripts/dashboard.js']
                        });
                    }
                ]
            }
        })
});

adminModule.controller("loginCtrl",function($scope,$http,authService){
    $scope.auth=authService;
});