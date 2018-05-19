//bank
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var userGuessed =[];


//html (before event)
var statusDOM =  "OMG You Are the WINNER: <b>" + winCount + "</b><br>" +
				 "You Will Never Be Miss Cleo, Loser: <b>" + lossCount + "</b><br>" +
				 "Remaining Guesses: <b>" + guessLeft + "</b><br>";

var statusMCDOM = userGuessed;

//inputs html above
document.querySelector("#stats-div").innerHTML = statusDOM;
document.querySelector(".letter-guess-div").innerHTML = statusMCDOM;

//random letter from letter bank
var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];


//reset
var resetGame = function(){
	guessLeft = 9;
	userGuessed = [];
	randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
};

//results to HTML
function printToHTML(){
//writing html to document (after event)
var statusDOM = "OMG You Are the WINNER: <b>" + winCount + "</b><br>" +
				 "You Will Never Be Miss Cleo, Loser: <b>" + lossCount + "</b><br>" +
				 "Remaining Guesses: <b>" + guessLeft + "</b><br>";

var statusMCDOM = userGuessed;

//inputs html above
document.querySelector("#stats-div").innerHTML = statusDOM;
document.querySelector(".letter-guess-div").innerHTML = statusMCDOM;
}

//when user guesses, it is saved in currentGuess
document.onkeyup = function(event){
	var currentGuess = event.key;

	//check letter inputs only
	if(letterBank.includes(currentGuess)){

		//check if letter has been guessed
		if(userGuessed.includes(currentGuess)){
			alert("That Has Already Been Guessed!");
		} else {
			//if guesses remain = run comparison
			//if guess is correct add +1 to winCount else minus -1 to guesses left
			if (guessLeft > 1){
				if (randomLetter === currentGuess){
					winCount += 1;
					alert("WINNER!!! You Are Basically Miss Cleo By Guessing: " + randomLetter);
					resetGame();
				} else {
					guessLeft -= 1;
					userGuessed.push(currentGuess);
				};
				printToHTML();
			//no guesses remain = reset game
			} else {
				guessLeft = 0;
				lossCount += 1;
				userGuessed.push(currentGuess);
				printToHTML();
				alert("LOSER!!! You Will Never Be Miss Cleo! The Letter Was: " + randomLetter);
				resetGame();
			};
			printToHTML();
		};

	} else {
		alert("Please choose a letter");
	};

};