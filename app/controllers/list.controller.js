/**
 * Wrap the code in an IIFE - immediately invoked function expression - to avoid global scoping issues
 */
(function (){
    angular.module('angularjsDemo')
    .controller("listController", ['$scope', 'dataLoaderFactory', 'modalService', 'learnmoreService', function ($scope, dataLoaderFactory, modalService, learnmoreService){
        $scope.data = dataLoaderFactory.data;
        $scope.search = "";

        // function must be attached to the scope to be available for ng-click
        $scope.toggleModal = function (objConcept){
            if(objConcept == null){
                console.log("objConcept was null.");
                return;
            }

            modalService.toggleModal(objConcept);
        }

        $scope.toggleMore = function(objConcept){
            if(objConcept == null){
                console.log("objConcept was null.");
                return;
            }

            learnmoreService.toggleMore(objConcept);
        }

        $scope.shouldHideList = function (){
            return learnmoreService.pageActive;
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