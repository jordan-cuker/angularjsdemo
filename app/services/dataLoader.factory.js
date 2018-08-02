/*
  Factory will expose the returned value of the function passed to it.
  Ex: for ".factory('factoryName', NameOfFunctionPassed)" the value of NameOfFunctionPassed will be exposed.
*/

angular.module('angularjsDemo')
  .factory('dataLoaderFactory', function() {
    var conceptData = [
      {
          title:"Template",
          description:"In AngularJS, templates are written with HTML that contains AngularJS-specific elements and attributes. AngularJS combines the template with information from the model and controller to render the dynamic view that a user sees in the browser.",
          link_url:"https://docs.angularjs.org/guide/templates",
          example:"" 
      },

      {
          title:"Directives",
          description:"Directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.",
          link_url:"https://docs.angularjs.org/guide/directive",
          example:"" 
      },

      {
          title:"Model",
          description:"Models is the data shown to the user in the view and with which the user interacts.",
          link_url:"https://docs.angularjs.org/guide/concepts#model",
          example:"" 
      },

      {
          title:"Scope",
          description:"Scope is context where the model is stored so that controllers, directives and expressions can access it.",
          link_url:"https://docs.angularjs.org/guide/concepts#scope",
          example:"" 
      },

      {
          title:"Expressions",
          description:"Expresion are access variables and functions from the scope.",
          link_url:"https://docs.angularjs.org/guide/concepts#expression",
          example:"" 
      },

      {
          title:"Compiler",
          description:"The compiler parses the template and instantiates directives and expressions.",
          link_url:"https://docs.angularjs.org/guide/concepts#compiler",
          example:"" 
      },

      {
          title:"Filter",
          description:"A filter formats the value of an expression for display to the user.",
          link_url:"https://docs.angularjs.org/guide/concepts#filter",
          example:"" 
      },

      {
          title:"View",
          description:"The view is what the user sees (the DOM).",
          link_url:"https://docs.angularjs.org/guide/concepts#view",
          example:"" 
      },

      {
          title:"Data Binding",
          description:"Data binding is the act of syncing data between the model and the view.",
          link_url:"https://docs.angularjs.org/guide/concepts#databinding",
          example:"" 
      },

      {
          title:"Controller",
          description:"Controller is the business logic behind views.",
          link_url:"https://docs.angularjs.org/guide/concepts#controller",
          example:"" 
      },

      {
          title:"Dependency Injection",
          description:"A Dependency Injection creates and wires objects and functions.",
          link_url:"https://docs.angularjs.org/guide/concepts#di",
          example:"" 
      },

      {
          title:"Injector",
          description:"An injector is a dependency injection container",
          link_url:"https://docs.angularjs.org/guide/concepts#injector",
          example:"" 
      },

      {
          title:"Module",
          description:"A module is a container for the different parts of an app including controllers, services, filters, directives which configures the Injector.",
          link_url:"https://docs.angularjs.org/guide/concepts#module",
          example:"" 
      },

      {
          title:"Service",
          description:"A service is a reusable business logic independent of views.",
          link_url:"https://docs.angularjs.org/guide/concepts#service",
          example:"" 
      }
    ];

    var factory = {};

    var getConceptByTitle = function (strTitle) {
      if(strTitle == null){
        console.log('Returning NULL');
        return null;
      }
      var foundElement = null;
      
      conceptData.forEach(function(element){
        if (strTitle.toLowerCase() == element.title.toLowerCase()){
          console.log('Found elem:', element);
          foundElement = element
        }
      })
      return foundElement;
    };

    // commenting out the below line will not expose the getConceptByTitle function as it is not part of the returned object
    factory.getConceptByTitle = getConceptByTitle;

    factory.data = conceptData;
    //console.log(factory);
    return factory;
});