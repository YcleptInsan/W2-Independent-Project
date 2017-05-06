// FRONT END LOGIC
$(document).ready(function(){
	//ON CLICK OF TEXT ID FOR FIRST CLUE HIDE MAIN HEADER AMD ADD BACGROUND CLASS FOR THE HIDDEN TEXT. LAST SHOW THE HEADER TO PROMPT USER OF SURVEY INSTRUCTIONS
	$("#first-clue-event1").click(function(event){
			event.preventDefault();
			$(".main-header").hide();
			$(".bg-toggle").addClass("bg-white");
			$("#hidden-header").show();

			//ON CLICK OF EVENT 2  TRIGGERS ALL CONTENT BEFORE TO BE HIDDEN AND THEM SHOW THE FIRST QUESION
	$("#event2").click(function(){

			$("#first-clue-event1").hide();
			$(".radios-1stSet").show();
			$("#hidden-header").hide();

			//ON SUBMIT OF FIRST QUESTIOn  HIDE CURRENT QUESTIOn AND SHOW NEXT QUESTIOn//
	$("#button1").click(function(){
			$(".radios-1stSet").hide();
			$(".radios-2ndSet").show();
			//GET RADIO VALUES AND STOER THEM IN  VAIABLES
				var radio1 = document.getElementById("radio1").checked;
				console.log(radio1);
				var radio2 = document.getElementById("radio2").checked;
				console.log(radio2);
				var radio3 = document.getElementById("radio3").checked;
				console.log(radio3);
				// IF ELSE STAEMENTS TO TRIGGER SHOWING OF PICTURES BASED ON RADIO VALUE AS A BOOLEEN
					if(radio1 === true && radio2 === false && radio3 === false || radio1Set2 === true && radio2Set2 === false && radio3Set2 === false || radio1Set3 === true && radio2Set3 === false && radio3Set3 === false) {

						$("#imgResult1").show();
					}else {
						alert("do something");
					}

					//ON CLICK OF BUTTON FOR SECOND QUESTIOn HIDE CURRENT QUESTIOn AND SHOW NEXT QUESTIOn//
		$("#button2").click(function(){
			$(".radios-2ndSet").hide();
			$(".radios-3rdSet").show();

			//GATHERS AND STORES INPUT OF SECOND QUESTIOn IN VARIABLES//
				var radio1Set2 = document.getElementById("radio1Set2").checked;
				console.log(radio1Set2);
				var radio2Set2 = document.getElementById("radio2Set2").checked;
				console.log(radio2Set2);
				var radio3Set2 = document.getElementById("radio3Set2").checked;
				console.log(radio3Set2);
				//IF SAND ELSE STATEMENTS FOR DETERMINING IMAGE RESULT SHOWN
				if(radio1 === false && radio2 === true && radio3 === false || radio1Set2 === false && radio2Set2 === true && radio3Set2 === false || radio1Set3 === false && radio2Set3 === true && radio3Set3 === false || radio2=== true && radio3Set2 ===true && radio3Set3 === true) {

					$("#imgResult2").show();

			} else {
				$("#imgResult1").show();
				$("#imgResult2").hide();
				$("#imgResult3").hide();
			}
				//LAST BUTTON ON CLICK HIDES QUESTIOn 3  and shows container.
		$("#button3").click(function(){

			$(".radios-3rdSet").hide();
			$(".container").show();

				var radio1Set3 = document.getElementById("radio1Set3").checked;
				var radio2Set3 = document.getElementById("radio2Set3").checked;
				var radio3Set3 = document.getElementById("radio3Set3").checked;

				if(radio1 === false && radio2 === false && radio3 === true || radio1Set2 === false && radio2Set2 === false && radio3Set2 === true || radio1Set3 === false && radio2Set3 === false && radio3Set3 === true) {

					$("#imgResult3").show();
				}
		});
	  });
	  });
	  });
	 });
  });
