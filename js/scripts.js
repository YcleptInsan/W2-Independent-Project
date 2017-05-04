$(document).ready(function(){
	$("#first-clue-event1").click(function(event){
			event.preventDefault();
				$(".main-header").hide();
				$(".bg-toggle").addClass("bg-white");
				$("#hidden-header").show();
	});

	$("#event2").click(function(event){

			var radio1 = document.getElementById("radio1").checked;
			var radio2 = document.getElementById("radio2").checked;
			var radio3 = document.getElementById("radio3").checked;

				event.preventDefault();
			console.log(radio2);
			console.log(radio1);
			console.log(radio3);
			// var result1 = $("input:radio[name=radio]:checked").val();
				$("#first-clue-event1").hide();
				$(".radios-1stSet").show();
				$("#hidden-header").hide();

				// if(radio1 === true && radio2 === false && radio3 === false) {
				//
				// }
				//


	});

	$("#button1").click(function(event){
		event.preventDefault();
			var result2 = $("input:radio[name=radio2]:checked").val();
				$(".radios-1stSet").hide();
				$(".radios-2ndSet").show();
				console.log(result2);

	});
	$("#button2").click(function(event){
		event.preventDefault();
			var result3 = $("input:radio[name=radio3]:checked").val();
				$(".radios-2ndSet").hide();
				$(".radios-3rdSet").show();
				console.log(result3);

	});
	$("#button3").click(function(event){
			event.preventDefault();
			$(".radios-3rdSet").hide();
			$(".container").show();
			$(".output").show();
			$(".output").append(result);

	});
});
