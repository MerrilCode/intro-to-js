numbersClickedInner = [];

function numberSeven(){
	var numberSeven = document.getElementsByClassName("buttonNum");
	var sevenInner = numberSeven[0].innerHTML;
	// console.log(sevenInner);
	return sevenInner;
	
}

function numberEight(){
	var numberEight = document.getElementsByClassName("buttonNum");
	var eightInner = numberEight[1].innerHTML;
	// console.log(sevenInner);
	return eightInner;
	
}



function changeDisplay(number){
	var numberClicked =  document.getElementsByClassName("buttonNum");
	// var numberClickedInner = []; 
	numbersClickedInner.push(numberClicked[number].innerHTML);
	var displayChange = document.getElementsByClassName("screen");
	displayChange[0].innerHTML = numbersClickedInner.join();
	
}

console.log(numbersClickedInner);