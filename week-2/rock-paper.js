
var playerPoint = 0;
var computerPoint = 0;

// console.log(userInput);
var userInput = prompt("Please choose one option from rock,paper,scissor");

for( var i = 0; i <5; i++){	
		rockPaperUser(userInput);
		//console.log(userInput);
		if((playerPoint == 3)){
			alert("You win!");
			break;
		} else if((computerPoint == 3)){
			alert("You lost. The computer beats you");
			break;
		} else if(playerPoint > computerPoint) {
			alert("You are leading, your point is: " +playerPoint);
		} else if (computerPoint > playerPoint){
			alert("The computer is leading with a score of: "+computerPoint);
		} else{
			alert("You both have same points.");
		}
			userInput = prompt("Please choose one option from rock,paper,scissor");
}	


function rockPaperUser(player1) {
	var computerDecision = rockPaperComputer();
	alert("Computer chose: " +computerDecision);
	var score = rockPaperDecision(player1,computerDecision);
	gameCounter(score);
}

function rockPaperComputer(){
	var decisionArray = ["rock","paper","scissor"];
	var x = Math.floor((Math.random()*3));
	return (decisionArray[x]);
}

function rockPaperDecision(player1,computerPlayer){
	if(player1 == computerPlayer){
		return "tie";
	} else if(player1 == "rock" && computerPlayer == "paper"){
		return "lose";
	} else if(player1 == "paper" && computerPlayer == "scissor"){
		return "lose";
	} else if(player1 =="scissor" && computerPlayer =="rock"){
		return "lose";
	}
	else {
		return "win";
	}

}

function gameCounter(point){
	if(point =="win"){
		playerPoint++;
	} else if(point == "lose"){
		computerPoint ++;
	}
	else{
		console.log("Round tied");
	}
}

