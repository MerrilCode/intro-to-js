// add and event listner to a button (DONE)
// var button = document.getElementsByClassName('buttonNum')[0];
// button.addEventListener("click", function(){
// 	console.log("He's only gone and bloody cicked it");
// });

// add event listeners for each button * (DONE)

var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen');

function addButtonListeners(){
	for(var i=0; i<numberButtons.length; i++){

		var button = numberButtons[i];
		button.addEventListener("click", function(event){
			displayText(event.target.innerHTML);
		});
	};
	for(var i=0; i<operatorButtons.length; i++){
		var operatorButton = operatorButtons[i];
		operatorButton.addEventListener("click", function(event){
			displayText(event.target.innerHTML);
		});		
	};
};



addButtonListeners();


// for (var i in numberButtons){
// 	console.log(numberButtons[i]);
// }
//event listener access the text from the button that is clicked

// Enter the text  from the number and operator  button on to the screen in the HTML * (DONE)

function displayText(text){
	return display.innerHTML = text;
}

displayText("Ollie");

// Add event listener to the calculate button that fires a function called "calculate" *

// Write the calculate function to take two numbers and operator and retun the answer 
// Display the answe on the screen

// Add an event listener to the reset button to clear the page and the variables *
