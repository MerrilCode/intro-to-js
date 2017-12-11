
  // get the user inputs
var userChoice = prompt("Do you want to use the calculator? y/n");

//while loop runs as long as the user wants to use the calculator
while (userChoice == "y"){
//asking the user for the type of calculator to use
   var calculator = prompt("do you want to use bmi,(mort)gage calculator or (norm)al?");
//if block runs for bmi type
   if(calculator =="bmi"){
            var weight = parseInt(prompt("What is your weight in kg?"));
            var height = parseFloat(prompt("What is your height in meter?"));
            alert(weight/Math.pow(height,2));

//this else if clock runs for mortgage
    } else if(calculator == "mort"){
    	var amount = parseInt(prompt("What is your mortgage loan?"));
    	var interest = 3;
    	var period = parseInt(prompt("How long do you want your mortgage in years?"));
    	var monthlyRate = (interest/100)/12;
    	var numberOfMonths = period *12;
    	var topDiv = amount * (Math.pow(1+monthlyRate,numberOfMonths)*monthlyRate);

    	var bottomDiv = Math.pow((1+monthlyRate),numberOfMonths)-1;
    	alert("Your monthly payment for the amount of loan at interest of 3% is: "+ topDiv/bottomDiv);
    	
    }
// this block runs for normal
    else if (calculator == "norm"){
    	//asking the user for the type of operation to do
        var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (sq)uare root (p)ower b(mi)') || "a";
        //this if block runs for square root
        if(choice =="sq"){
            var value1 = parseInt(prompt("Please enter the value for square root"));
            alert(Math.sqrt(value1));
        } 
        // else block runs for every other operations 
        else {
            var value1 = parseInt(prompt('enter first value')); 
            var value2 = parseInt(prompt('enter the second value'));
       
        	switch(choice){
                case "a":
                    alert("The total for the two numbers is: " + (value1 + value2));
                    
                    break;
                case "s":
                    alert("The total for the two numbers is: " + (value1 - value2));
                   
                    break;
                case "m":
                    alert("The total for the two numbers is: " + (value1 * value2));
                  
                    break;
                case "d":
                    alert("The total for the two numbers is: " + (value1 / value2));
                  
                    break;
                case "p":
                    alert("your value is: " + Math.pow(value1,value2));
                 
                case "b":


                default:
                    alert("no value entered");
                   

        	}
    	}
   
	}
	//prompts the user until the user puts no.
     userChoice = prompt("Do you want to use the calculator? y/n");
}
