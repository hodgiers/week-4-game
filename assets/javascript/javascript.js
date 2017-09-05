// GLOBAL VARIABLES

//Crystal object to rack value of crystals
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	},
}



//Track Current & Target Score

var currentScore 	= 0;
var targetScore 	= 0;


// Track Wins & Losses

var winCount 		= 0;
var lossCount 		= 0;



// FUNCTIONS

//Function to create a random number
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Starts Game
var startGame = function() {

	//Reset Current Score
	var currentScore = 0;

	//Set new target score between 19 and 120
	targetScore = getRandom(19, 120);

	//Set different values for each of the crystals (betweem 1 & 12)
	crystal.blue.value 		= getRandom(1, 12);
	crystal.green.value 	= getRandom(1, 12);
	crystal.red.value 		= getRandom(1, 12);
	crystal.yellow.value 	= getRandom(1, 12);


	//Change the html to reflect all of these changes
	$('#yourScore').html(currentScore);
	$('#targetScore').html(targetScore);



	// Testing Console
	console.log("----------------------------");
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value  + " | Yellow: " + crystal.yellow.value);
	console.log("----------------------------");
};


//Change score based on crystals being clicked
var addValues = function(crystal) {
	currentScore = currentScore + crystal.value;

	//change htm; to reflect changes
	$('#yourScore').html(currentScore);

	//call userwin function
	userWin();

	console.log("Your Score: " + currentScore);
}

//Check if user wins or loses and start the game again
var userWin = function() {

	//Check if current score is higher than target score
	if(currentScore > targetScore) {
		alert("You've lost!");

	//Add to losses
	lossCount++;

	//Update Html
	$('#lossCount').html(lossCount);

	//Restart Game
	startGame();

}
	else if (currentScore == targetScore) {
		alert("You've won!");

	//Add to wins
	winCount++;

	//Update HTML
	$('#winCount').html(winCount);

	//Restart Game
	startGame();


}};


// MAIN 

startGame();

 $("#blue").on("click", function() {
 	addValues(crystal.blue);

 });

 $("#green").on("click", function() {
 	addValues(crystal.green);

 });

 $("#red").on("click", function() {
 	addValues(crystal.red);

 });

  $("#yellow").on("click", function() {
 	addValues(crystal.yellow);

 });








