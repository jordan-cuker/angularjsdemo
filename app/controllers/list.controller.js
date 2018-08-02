/**
 * Wrap the code in an IIFE - immediately invoked function expression - to avoid global scoping issues
 */
(function (){
    angular.module('angularjsDemo')
    .controller("listController", ['$scope', 'dataLoaderFactory', 'modalService', function ($scope, dataLoaderFactory, modalService){
        $scope.data = dataLoaderFactory.data;

        // function must be attached to the scope to be available for ng-click
        $scope.toggleModal = function (objConcept){
            console.log("clicked");
            if(objConcept == null){
                console.log("objConcept was null.");
                return;
            }

            modalService.toggleModal(objConcept);
        }

        $scope.shouldHideList = function (){
            return modalService.modalActive;
        }
    }])
    .directive("customHtmlTag", function() {
        return {
            restrict: 'E',
            // TODO - explain transclude
            transclude: false,
            templateUrl: '../../views/list.html'
          };
    });

})();