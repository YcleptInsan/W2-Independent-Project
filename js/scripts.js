$(document).ready(function(){
	$("#first-clue-event1").click(function(event){
			event.preventDefault();
				$(".main-header").hide();
				$(".bg-toggle").addClass("bg-white");
				$("#hidden-header").show();
	});

	$("#event2").click(function(event){
		event.preventDefault();
		// var result1 = $("input:radio[name=radio]:checked").val();
		$("#first-clue-event1").hide();
		$(".radios-1stSet").show();
		$("#hidden-header").hide();



	});

	$("#button1").click(function(event){
		event.preventDefault();
		$(".radios-1stSet").hide();
		$(".radios-2ndSet").show();

			var radio1 = document.getElementById("radio1").checked;
			var radio2 = document.getElementById("radio2").checked;
			var radio3 = document.getElementById("radio3").checked;

				if(radio1 === true && radio2 === false && radio3 === false) {
					alert("it works finally")
				} else if(radio1 === false && radio2 === true && radio3 === false) {
					alert("wtf");
				} else if(radio1 === false && radio2 === false && radio3 === true) {
					alert("what have I done");
				}


	});
	$("#button2").click(function(event){
		event.preventDefault();
		$(".radios-2ndSet").hide();
		$(".radios-3rdSet").show();

		var radio1Set2 = document.getElementById("radio1Set2").checked;
		var radio2Set2 = document.getElementById("radio2Set2").checked;
		var radio3Set2 = document.getElementById("radio3Set2").checked;

			if(radio1Set2 === true && radio2Set2 === false && radio3Set2 === false) {
				alert("it works finally")
			} else if(radio1Set2 === false && radio2Set2 === true && radio3Set2 === false) {
				alert("wtf");
			} else if(radio1Set2 === false && radio2Set2 === false && radio3Set2 === true) {
				alert("what have I done");
			}

	});
	$("#button3").click(function(event){
		event.preventDefault();
		$(".radios-3rdSet").hide();
		$(".container").show();
		$(".output").show();
		$(".output").append(result);

		var radio1Set3 = document.getElementById("radio1Set3").checked;
		var radio2Set3 = document.getElementById("radio2Set3").checked;
		var radio3Set3 = document.getElementById("radio3Set3").checked;

			if(radio1Set3 === true && radio2Set3 === false && radio3Set3 === false) {
				
			} else if(radio1Set3 === false && radio2Set3 === true && radio3Set3 === false) {
				alert("wtf");
			} else if(radio1Set3 === false && radio2Set3 === false && radio3Set3 === true) {
				alert("what have I done");
			}

	});
});
