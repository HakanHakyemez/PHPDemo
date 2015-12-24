/**
 * Created by 02483138 on 1.12.2015.
 */
var adminNewsRequestModule = angular.module('admin');

adminNewsRequestModule.controller('newsrequestCtrl', function ($scope, $http) {
    $.blockUI();
    $http.post("../Admin/PHP/Newsrequest/Handler_Newsrequest.php?request=getlist").success(function(result){
        $scope.newsList=result;

        $.unblockUI();
    });

    $scope.delete=function(id){
        $.blockUI();
        $http.post("../Admin/PHP/Newsrequest/Handler_Newsrequest.php?request=delete&id="+id).success(function(result){
           if(result=="true" || true){
               toastr.success("Silme ??lemi Ba?ar?l?");
           }
            $http.post("../Admin/PHP/Newsrequest/Handler_Newsrequest.php?request=getlist").success(function(result){
                $scope.newsList=result;
                $.unblockUI();
            });

        });
    };
});