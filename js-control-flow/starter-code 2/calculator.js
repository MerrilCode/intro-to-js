
  // get the user inputs
   var userChoice = prompt("Do you want to use the calculator? y/n");

   while (userChoice == "y"){

	   var calculator = prompt("do you want to use bmi,(mort)gage calculator or normal?");

	   if(calculator =="bmi"){
	            var weight = parseInt(prompt("What is your weight in kg?"));
	            var height = parseFloat(prompt("What is your height in meter?"));
	            alert(weight/Math.pow(height,2));

	    } else if(calculator == "mort"){
	    	var amount = parseInt(prompt("What is your mortgage amount?"));
	    	var interest = 3;
	    	var period = parseInt(prompt("How long do you want your mortgage?"));
	    	var monthlyRate = (interest/100)/12;
	    	var numberOfMonths = period *12;
	    	var topDiv = amount * (Math.pow(1+monthlyRate,numberOfMonths)*monthlyRate);

	    	var bottomDiv = Math.pow((1+monthlyRate),numberOfMonths)-1;
	    	alert("Your monthly payment for the amount of loan at interest of 3% is: "+ topDiv/bottomDiv);
	    	
	    }


	    else if (calculator == "norm"){
	    
	        

	            var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (sq)uare root (p)ower b(mi)') || "a";
	            if(choice =="sq"){
	                var value1 = parseInt(prompt("Please enter the value for square root"));
	                alert(Math.sqrt(value1));
	            } 

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
	     userChoice = prompt("Do you want to use the calculator? y/n");
    }
