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

	$("#button1").click(function(event){
		event.preventDefault();
		$(".radios-1stSet").hide();
		$(".radios-2ndSet").show();
		var radio1Result= [radio1Set1 + radio2Set1 + radio3Set1];
		var radio1Set1 = $("input#radio1").val();
		var radio2Set1 = $("input#radio2").val();
		var radio3Set1 = $("input#radio3").val();

	});
	$("#button2").click(function(event){
		event.preventDefault();
		$(".radios-2ndSet").hide();
		$(".radios-3rdSet").show();
		var radio1Set2 = $("input#radio1Set2").val();
		var radio2Set2 = $("input#radio2Set2").val();
		var radio3Set2 = $("input#radio3Set2").val();

	});
	$("#button3").click(function(event){
		event.preventDefault();
		$(".radios-3rdSet").hide();
		$(".container").show();
		$(".output").show();
		$(".output").append(result);
		var radio1Set3 = $("input#radio1Set3").val();
		var radio2Set3 = $("input#radio2Set3").val();
		var radio3Set3 = $("input#radio3Set3").val();
	});
});
