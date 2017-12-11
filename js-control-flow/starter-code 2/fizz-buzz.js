
var wantsToPlay = prompt("Do you want to play fizz-buzz?. [y/n]");

while(wantsToPlay == "y"){

	var userInput = parseInt(prompt("Please enter a number"));

	if(userInput%3 == 0 && userInput%5 == 0){
		alert("FiZZZZZ-----BuZZZZZ");
	}
	else if(userInput%3 == 0){
		alert("FiZZZZZ");
	}
	else if (userInput%5 == 0){
		alert("BuZZZZZ");
	}
	
	else{
		alert("Please enter a number next time")
	}
	wantsToPlay = prompt("Do you want to play fizz-buzz?. [y/n]");
}


for(var i=1; i<=100; i++){
	if(i%3 == 0 && i%5 == 0){
		console.log("FiZZZZZ-----BuZZZZZ");
	}
	else if(i%3 == 0){
		console.log("FiZZZZZ");
	}
	else if(i%5 == 0){
		console.log("BuZZZZZ");
	}
	else{
		console.log(i);
	}
}