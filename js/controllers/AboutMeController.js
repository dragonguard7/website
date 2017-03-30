app.controller('aboutMeController', function($scope){

   $scope.aboutMe = "About Me!";
  
    $scope.activities=[
        {
        	name:'Rock climbing',
        	description:'I have been rock climbing for the last 5 years. '+
        	'I primarily go indoor climbing, but I have done outdoor top rope climbing at Rattlesnake Point in Ontario, Canada.',
        	imgURL: 'img/climbing2.jpg'
        },
        {
        	name:'Programming',
        	description:'When I first started programming back in highschool, I knew where my future would be. The possibilties in programming are endless since there is so much versatility.' +
        	'The ability to create anything I wanted or imagined is amazing and enticing.',
            imgURL: 'img/snake.jpg'
        },
        {
        	name:'Video Games',
        	description:'I love to play video games to relax or for a challenge, depending on my mood. I love questing RPG games, like the Final Fantasy series, as well as strategy and RTS games.' +
        	'Puzzle games can also be very enjoyable, such as Sudoku and Hitori.',
        	imgURL: 'img/RPG.jpg'
        }
    ];
    
    $scope.accomplishments=[
		{
			name:'Bachelors degree',
			description:'One of the best things I have done in my life is complete school. Throughout school, I have learned a tremendous amount of information and went through countless trials to overcome.' +
			'As I completed more courses, my desire to learn only grew. It was rewarding to complete the content of the program and I learned there is always more to experiement with and learn.',
			imgURL: 'img/graduating.jpg'
		},
		{
        	name:'Senior Design Project',
        	description:'Programming is awesome!',
            imgURL: 'img/SeniorDesignProject.jpg'
        },
        {
        	name:'My website',
        	description:'Building anything from scratch is gratifying. As the pieces come together and get closer to completion, the fulfillment reaches its peak. Throughout the process of building my website, I gained valuable knowledge and experience.' +
        	'I was able to learn and apply new techniques, then, as I expand and refine my website, integrate them with future techniques.',
        	imgURL: 'img/website.jpg'
        }
    ];
    
});