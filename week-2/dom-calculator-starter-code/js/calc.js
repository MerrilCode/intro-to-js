var displayClickedInner = [];
var numbersClickedInner = [];
var firstNumber;
var secondNumber;
var operatorReturn = [];
var equals = getEquals("return");
//console.log(equals);

function getNumber(number){ // This function gets a number from the number elements in the calculator.
	// if(operatorReturn.length == 0){
		var numberClicked =  document.getElementsByClassName("buttonNum");
		displayClickedInner.push(numberClicked[number].innerHTML);
		numbersClickedInner.push(numberClicked[number].innerHTML);
		var displayChange = document.getElementsByClassName("screen");
		displayChange[0].innerHTML = displayClickedInner.join("");	
		firstNumber = numbersClickedInner.join("");
	// } else if (equals == "="){
	// 	numbersClickedInner =[];
	// 	var numberClicked =  document.getElementsByClassName("buttonNum");
	// 	displayClickedInner.push(numberClicked[number].innerHTML);
	// 	numbersClickedInner.push(numberClicked[number].innerHTML);
	// 	var displayChange = document.getElementsByClassName("screen");
	// 	displayChange[0].innerHTML = displayClickedInner.join("");
	// 	// console.log(parseInt(displayClickedInner.join("")));
	// }
}


function getOperator(operatorNumber){
	
	if(operatorNumber == 0 || operatorNumber == 1 || operatorNumber == 2 || operatorNumber == 3 ){
		var operatorClicked =  document.getElementsByClassName("operator");
		var operatorClickedInner = operatorClicked[operatorNumber].innerHTML;
		operatorReturn.push(operatorClickedInner);
		displayClickedInner.push(operatorClickedInner);
		var displayChange = document.getElementsByClassName("screen");
		displayChange[0].innerHTML = displayClickedInner.join("");
		
	}
	//console.log(parseInt(displayClickedInner.join("")));
	numbersClickedInner = [];
	console.log(numbersClickedInner.length);
	console.log(firstNumber);
	
}



function getEquals(string){
		var equalsClicked = document.getElementsByClassName("equals");
		var equalsClickedInner = equalsClicked[0].innerHTML;
		if(string == "display"){
			displayClickedInner.push(equalsClickedInner);
			var displayChange = document.getElementsByClassName("screen");
			displayChange[0].innerHTML = displayClickedInner.join("");
		}else if(string == "return") {
			return equalsClickedInner;
		}
		console.log(numbersClickedInner.length);
		secondNumber = numbersClickedInner.join("");
		console.log(secondNumber);
		var displayChange = document.getElementsByClassName("screen");
		displayChange[0].innerHTML = firstNumber + ""  +secondNumber;

}


function clearDisplay(){
	var clearClicked = document.getElementsByClassName("buttonClear");
	var clearClickedInner = clearClicked[0].innerHTML;
	var displayChange = document.getElementsByClassName("screen");
	displayChange[0].innerHTML = "Sparta Calculator";
	displayClickedInner = [];
}


