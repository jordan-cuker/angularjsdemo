angular.module("angularjsDemo")
    .component("learnMoreController", {
        controller: ($scope, learnmoreService) => {
            $scope.shouldHideMore = function () {
                return !learnmoreService.pageActive;
            }
            $scope.toggleMore = function(){
                return learnmoreService.toggleMore(null);
            }
            $scope.getData = function(){
                return learnmoreService.conceptData;
            }
            $scope.getTemplateUrl = function(){
                console.log("../../views/" + conceptParam + ".html");
                //return "../../views/" + $scope.conceptTitle + ".html";
            }
        },
        bindings: {
            conceptParam: '='
        },
        template: `<ng-include src="getTemplateUrl()"/>`
    })

// angular.module("angularjsDemo")
//     .controller("learnmoreController", function($scope, learnmoreService){

//         $scope.shouldHideMore = function (){
//             return !learnmoreService.pageActive;
//         }
//         $scope.toggleMore = function(){
//             return learnmoreService.toggleMore(null);
//         }
//         $scope.getData = function(){
//             return learnmoreService.conceptData;
//         }
//     })
//     .directive("learnMore", function(){
//         return{
//             restrict: "E",
//             template: `<ng-include src="getTemplateUrl()"/>`,
//             scope: {
//                 conceptTitle: '=conceptParam'
//             },
//             controller: function($scope) {
//                 // function used on the ng-include to resolve the template
//                 $scope.getTemplateUrl = function() {
//                     console.log("../../views/" + $scope.conceptTitle + ".html");
//                     return "../../views/" + $scope.conceptTitle + ".html";
//                 }
//               }
//         }
//     });