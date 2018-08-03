angular.module("angularjsDemo")
    .controller("learnmoreController", function($scope, learnmoreService){

        $scope.shouldHideMore = function (){
            return !learnmoreService.pageActive;
        }
        $scope.toggleMore = function(){
            return learnmoreService.toggleMore(null);
        }
        $scope.getData = function(){
            return learnmoreService.conceptData;
        }

    })
    .directive("learnMore", function(){
        return{
            restrict: "E",
            templateUrl: "../../views/learn-more.html"
        }
    })