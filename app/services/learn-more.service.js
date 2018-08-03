/*
  Service will expose the function passed to it.
  Ex: for ".service('serviceName', NameOfFunctionPassed)" the function NameOfFunctionPassed will be exposed.
*/

angular.module("angularjsDemo")
    .service("learnmoreService", function(){
        // this must be prepended to everything that should be exposed via the service
        this.pageActive = false;
        this.conceptData;

        this.toggleMore = function (objConcept){
            if(this.pageActive){
                this.pageActive = false;
            }
            else{
                if(objConcept == null){
                    console.log("Error in toggalModal: objConcept was null");
                    return;
                }
                this.conceptData = objConcept;
                this.pageActive = true;
            }
        }
    });