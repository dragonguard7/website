app.controller('aboutMeController', function($scope){

   $scope.aboutMe = "About Me!";
  
    $scope.activities=[
        {
        	name:'Rock climbing',
        	description:'I love to go climbing, mostly indoors I need to repeat this to check I need to repeat this to check I need to repeat this to check I need to repeat this to check I need to repeat this to check I need to repeat this to check I need to repeat this to check I need to repeat this to check',
        	imgURL: 'img/hitori.jpg'
        },
        {
        	name:'Programming',
        	description:'Programming is awesome!',
            imgURL: 'img/mazeRunner.jpg'
        },
        {
        	name:'Learning',
        	description:'Learning new things everyday is the best.',
        	imgURL: 'img/RPG.jpg'
        }
    ];
    
    $scope.accomplishments=[
		{
			name:'Bachelors degree',
			description:"One of the best things I've done in my life is complete school. Throughout school, I have learned a tremendous about of information and went through countless trials to overcome. Add more",
			imgURL: 'img/hitori.jpg'
		},
		{
        	name:'Programming',
        	description:'Programming is awesome!',
            imgURL: 'img/mazeRunner.jpg'
        },
        {
        	name:'Learning',
        	description:'Learning new things everyday is the best.',
        	imgURL: 'img/RPG.jpg'
        }
    ];
    
});