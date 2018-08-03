// angular.module("angularjsDemo")
//     .component("learnMoreController", {
//         controller: ($scope, learnmoreService) => {
//             $scope.shouldHideMore = function () {
//                 return !learnmoreService.pageActive;
//             }
//             $scope.toggleMore = function(){
//                 return learnmoreService.toggleMore(null);
//             }
//             $scope.getData = function(){
//                 return learnmoreService.conceptData;
//             }
//             this.$onInit = function(){
//                 console.log("this init");
//             }
//             $scope.getTemplateUrl = function(){
//                 //.console.log($scope.$ctrl);
//                 //return "../../views/" + $scope.conceptTitle + ".html";
//             }
//         },
//         bindings: {
//             concept: '='
//         },
//         template: `<ng-include src="getTemplateUrl()"/>`
//     })

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
    .directive("learnMoreController", function(){
        return{
            restrict: "E",
            template: `<ng-include src="getTemplateUrl()"/>`,
            scope: {
                concept: '=concept'
            },
            controller: function($scope) {
                // function used on the ng-include to resolve the template
                $scope.getTemplateUrl = function() {
                    //console.log($scope.concept);
                    return "../../views/" + String($scope.concept).replace(/\s/g,'') + ".html";
                }
              }
        }
    });