/**
 * Wrap the code in an IIFE - immediately invoked function expression - to avoid global scoping issues
 */
(function (){
    angular.module('angularjsDemo')
    .controller("listController", function ($scope, dataLoaderFactory){
        $scope.customer = {
            name: "asd",
            address: "asasa"
        };
        
        $scope.data = dataLoaderFactory.getConceptByTitle("Template");
    })
    .directive("customHtmlTag", function() {
        return {
            restrict: 'E',
            // TODO - explain transclude
            transclude: false,
            templateUrl: '../../views/list.html'
          };
    });

})();