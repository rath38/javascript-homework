var winCount = 0 ;

var guessCount = 15 ;

var guessSoFar = [];

var computerChoices = ["pikachu", "charmander", "squirtle", "bulbasaur"]

var computerGuess = "";

var letterId = "";

var computerArray = [];

var matches = 0; 
 
function makeGuess() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerArray = computerGuess.split("");
	matches = computerArray.length;
	scratchAss(matches);
}
function scratchAss(wordlen) {
for(i=0; i < wordlen; i++) {
letterId = "#e" + i;
document.querySelector(letterId).innerHTML="_";	
}
}
function checkAnswer(userGuess,computerGuess) { 
	
	var indexes = [],i;
	for(i=0; i < computerArray.length; i++)
		if (computerArray[i]===userGuess) {
			indexes.push(i);
		}
		return indexes;
  }

  function resetAll() {
  	guessCount = 15;
	document.querySelector("#guessLeft").innerHTML=guessCount;
	guessSoFar = [];
	document.querySelector("#guess").innerHTML=guessSoFar;
	

	for (i=0; i<10; i++) {
		letterId = "#e" + i;
		document.querySelector(letterId).innerHTML="";
	}
	makeGuess();

  }

window.onload = function(event){
	makeGuess();

}

document.onkeyup = function(event) {

	 var userGuess = event.key;

	 var matchIndex = checkAnswer(userGuess,computerGuess);

	 guessCount-=1;

	 if (guessSoFar.indexOf(userGuess) < 0) {
	 
	 guessSoFar.push(userGuess);

}
	 document.querySelector("#guessLeft").innerHTML = guessCount;
	 			
	 document.querySelector("#guess").innerHTML = guessSoFar;

	  if (matchIndex.length)  {
	  	for(i=0; i < matchIndex.length; i++) {

		letterId = "#e" + matchIndex[i];

		matches-=1;

	 	document.querySelector(letterId).innerHTML= userGuess;

	  	}
	   		
	  		if (matches==0) {

	  		winCount++;
	  		document.querySelector("#wins").innerHTML =winCount;
	  		switch(computerGuess){
			  		case "pikachu":
			  		document.querySelector("#title").innerHTML = "Pikachu";
			  		document.getElementById("imgChange").src="images/pikachu.jpg";
			  		break;

			  		case "charmander":
			  		document.querySelector("#title").innerHTML = "Charmander";
			  		document.getElementById("imgChange").src="images/charmander.png";
			  		break;

			  		case "squirtle":
			  		document.querySelector("#title").innerHTML = "Squirtle";
			  		document.getElementById("imgChange").src="images/squirtle.png";
			  		break;

			  		case "bulbasaur":
			  		document.querySelector("#title").innerHTML = "Bulbasaur";
			  		document.getElementById("imgChange").src="images/bulbasaur.jpg";
			  		break;

			  	}		
	  		resetAll();
	  		}



	  			if (guessCount == 0) {
	  				resetAll();

	  			}
	  	

	 }


}	 
