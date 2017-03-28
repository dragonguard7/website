app.directive('test', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/aboutMeItem.html' 
  }; 
});