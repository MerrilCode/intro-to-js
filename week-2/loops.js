
var myArray = ["Merril",1,2,3,5]


// for(var i=0; i<10; i+=2){
// 	console.log(i);
// }

// var x=0;
// while(x <10){
// 	x++;
// 	console.log(x);
// }

// do{
// 	console.log("Merril");
// } while(x<6);

// for(var x in myArray){
// 	console.log(myArray[x]);
// }

function forLoopFunction(array){

	for(var i = 0; i<array.length; i++){
		console.log(array[i]);
	}
}

 forLoopFunction(myArray);

function whileLoopFunction(array){
	var x = 0;
	while(x < array.length){
		console.log(array[x]);
		x++;
	}
}

whileLoopFunction(myArray);

function doWhileLoopFunction(array){
	x=0;

	do{
		console.log(array[x]);
		x++;
	}while(x< array.length);
}

doWhileLoopFunction(myArray);

function forInLoopFunction(array){
	for(x in array){
		console.log(array[x]);
	}
}

forInLoopFunction(myArray);