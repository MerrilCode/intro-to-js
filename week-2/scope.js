var myName = "Merril";
var myGender = "Male";

function myScope(name,gender){
	var age = 27;
	alert("My name is "+ name+" and I am a "+gender);
	
	function MyInnerScope(name,gender){
		var age = 7;
		console.log("my name is " +name+"and I am "+gender);
	}
	MyInnerScope(name,gender);
};

myScope(myName,myGender);
MyInnerScope(name,gender);