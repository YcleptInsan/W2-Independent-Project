$(document).ready(function(){
	$("#first-clue").click(function(event){
		event.preventDefault();
		$(".main-header").hide();
		$("#first-clue").css({
			"background-color: white"
		});

	});
});
