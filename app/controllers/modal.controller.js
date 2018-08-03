(function(){
    angular.module("angularjsDemo")
        .controller("modalController", function($scope, modalService){
            
            $scope.shouldHideModal = function (){
                return !modalService.modalActive;
            }
            $scope.toggleModal = function(){
                return modalService.toggleModal(null);
            }
            $scope.getData = function(){
                return modalService.conceptData;
            }

        })
        .directive("customModal", function(){
            return{
                restrict: "E",
                templateUrl: "../../views/modal.html"
            }
        })

        
})();