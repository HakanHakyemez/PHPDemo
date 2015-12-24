/**
 * Created by 02483138 on 24.12.2015.
 */
var contactApp=angular.module("contact",[]);

contactApp.controller("contactCtrl",function($scope,$http){
    $scope.isError=false;
    $scope.isSuccess=false;
    $scope.test="work";
    $scope.model={};
    $scope.saveContactForm=function(model){
        $scope.isDisabled=true;
        model.IsActive=1;
        model.CreatedDate=new Date();
        $http.post("../PHP/Contact/Handler_Contact.php?request=save",model).success(function(result){
            if(parseInt(result)>0){
                $scope.isSuccess=true;
                $scope.isError=false;
                $scope.model={};
                toastr.success("İşlem Başarılı")
            }else{
                $scope.isError=true;
                $scope.isSuccess=false;
                toastr.error("Hata Oluştu");
            }
            $scope.isDisabled=false;
            $(".go-top").click();
        });
    };
});