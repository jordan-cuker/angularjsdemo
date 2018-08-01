/**
 * Wrap the code in an IIFE - immediately invoked function expression - to avoid global scoping issues
 */
(function (){
    angular.module('angularjsDemo', [])
    .controller("listController", [ 'dataLoader', function ($scope, dataLoader){
        $scope.data = dataLoader.getConceptByTitle("Template");
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