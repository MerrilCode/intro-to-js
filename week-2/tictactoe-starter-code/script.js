
// two simbol to put inside the game
// display the symbols on the screen 
// display the symbol when the user choose the option of cross and circle
// create random move for computer
// implement the logic for having three successive symbol for players

$(document).ready(function(){
	var image1 = $("#oImg");
	$("#oImg").hide();
	$('[data-num="0"').click(function(){
		$('[data-num="0"').append(image1);
		// $("#oImg").show();
		 $("#oImg").toggle();
		
	});
});