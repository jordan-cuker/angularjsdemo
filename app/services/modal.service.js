/*
  Service will expose the function passed to it.
  Ex: for ".service('serviceName', NameOfFunctionPassed)" the function NameOfFunctionPassed will be exposed.
*/

angular.module("angularjsDemo")
    .service("modalService", function(){
        // this must be prepended to everything that should be exposed via the service
        this.modalActive = false;
        this.conceptData;

        this.toggleModal = function (objConcept){
            if(this.modalActive){
                this.modalActive = false;
            }
            else{
                if(objConcept == null){
                    console.log("Error in toggalModal: objConcept was null");
                    return;
                }
                this.conceptData = objConcept;
                this.modalActive = true;
            }
        }
    });