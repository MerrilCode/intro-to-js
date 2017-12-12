function inlineScript(value1){
	var message = "Hello  " +value1;
	return message;
}

function inlineScript2(value1,value2){
	var message = "Hello  " +value1  + " "+ value2;
	return message;
}
var message = inlineScript("Merril");
alert(message);

var message2 = inlineScript2("Merril",27);
alert(message2);