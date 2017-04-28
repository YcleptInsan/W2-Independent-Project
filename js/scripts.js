function on__off_Val1(){

	var main_result = $(radio1Set1)
	 document.getElementById("radio1").value;
    document.getElementById(".output").innerHTML = main_result;
		if (radio1Set1 === on)
			alert("on");
	// var main_result = radioSet1Result + radioSet2Result + radioSet3Result;
}
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
		var radioSet1Result= (radio1Set1 + radio2Set1 + radio3Set1);
		var radio1Set1 = $("input#radio1").val();
		var radio2Set1 = $("input#radio2").val();
		var radio3Set1 = $("input#radio3").val();

	});
	$("#button2").click(function(event){
		event.preventDefault();
		$(".radios-2ndSet").hide();
		$(".radios-3rdSet").show();
		var radioSet2Result= (radio1Set2 + radio2Set2 + radio3Set2);
		var radio1Set2 = $("input#radio1Set2").val();
		var radio2Set2 = $("input#radio2Set2").val();
		var radio3Set2 = $("input#radio3Set2").val();

	});
	$("#button3").click(function(event){
		event.preventDefault();
		$(".radios-3rdSet").hide();
		$(".container").show();
		$(".output").show();
		$(".output").append(main_result);
		var radioSet3Result= (radio1Set3 + radio2Set3 + radio3Set3);
		var radio1Set3 = $("input#radio1Set3").val();
		var radio2Set3 = $("input#radio2Set3").val();
		var radio3Set3 = $("input#radio3Set3").val();
	});
});
