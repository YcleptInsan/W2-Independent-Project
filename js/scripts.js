$(document).ready(function(){
	$("#first-clue-event1").click(function(event){
		event.preventDefault();
		$(".main-header").hide();
		$(".bg-toggle").addClass("bg-white");
		$("#hidden-header").show();
	});

	$("#event2").click(function(event){
		event.preventDefault();
		$("#first-clue-event1").hide();
		$(".radios-1stSet").show();
		$("#hidden-header").hide();
	});
});
