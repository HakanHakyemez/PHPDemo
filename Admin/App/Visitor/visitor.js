/**
 * Created by 02483138 on 1.12.2015.
 */
var adminVisitorRequestModule = angular.module('admin');

adminVisitorRequestModule.controller('visitorCtrl', function ($scope, $http) {
    $.blockUI();
    $http.post("../Admin/PHP/Visitor/Handler_Visitor.php?request=getlist").success(function(result){
        $scope.visitors=result;

        $.unblockUI();
    });

    $scope.delete=function(id){
        $.blockUI();
        $http.post("../Admin/PHP/Visitor/Handler_Visitor.php?request=delete&id="+id).success(function(result){
            if(result=="true" || true){
                toastr.success("Silme İşlemi Başarılı");
            }
            $http.post("../Admin/PHP/Visitor/Handler_Visitor.php?request=getlist").success(function(result){
                $scope.visitors=result;
                $.unblockUI();
            });

        });
    };
    $scope.selectedModel={};
    $scope.select= function (model) {
      $scope.selectedModel=model;
        $("#show-visitor-modal").modal("show");
    };
});