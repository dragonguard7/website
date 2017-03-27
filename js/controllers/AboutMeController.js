app.controller('aboutMeController', function($scope){

   $scope.aboutMe = "About Me!";
  
    $scope.activities=[
        {
        	name:'Rock climbing',
        	description:'I love to go climbing, mostly indoors.'
        },
        {
        		name:'Programming',
        		description:'Programming is awesome!'
        },
        {
        	name:'Learning',
        	description:'Learning new things everyday is the best.'
        }
    ];
});