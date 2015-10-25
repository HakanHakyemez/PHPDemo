/**
 * Created by 02483138 on 21.10.2015.
 */
var app=angular.module("app",[]);
app.controller('appCtrl',function($scope,$http){

    $scope.save=function(model){
        $http.post("http://127.0.0.1:63307/PHPDemo/Test/test_db.php",model).success(function(result){
            console.log(result);
        });
    };
});