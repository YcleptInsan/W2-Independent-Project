// // BACKEND LOGIC
// var result = function(radio1, radio2, radio3) {
// 	radio1 =
// 	radio2 =
// 	radio3 =
// } else {
//
// }

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
		$("#hidden-header").hide();
		$(".radios-1stSet").show();
		$(".radios-2ndSet").show();
		$(".radios-3rdSet").show();

	//ON SUBMIT OF FIRST QUESTIOn  HIDE CURRENT QUESTIOn AND SHOW NEXT QUESTIOn//
	$("#button3").click(function(){
		$(".container").show();
		$(".output").show();
		$(".radios-1stSet").hide();
		$(".radios-2ndSet").hide();
		$(".radios-3rdSet").hide();
			
			var msg = "please select at least one"
			//GET RADIO VALUES AND STOER THEM IN  VAIABLES TO BE USED BELOW
			var radio1 = document.getElementById("radio1").checked;
			console.log(radio1);
			var radio2 = document.getElementById("radio2").checked;
			console.log(radio2);
			var radio3 = document.getElementById("radio3").checked;
			console.log(radio3);

					if(radio1 === true) {
						$("#imgResult1").show()
					}else if(radio2 === true){
						$("#imgResult2").show()
					}else if(radio3 === true){
						$("#imgResult3").show()
					}else {
						alert(msg);
					}

	    //GATHERS AND STORES INPUT OF SECOND QUESTIOn IN VARIABLES//
			var radio1Set2 = document.getElementById("radio1Set2").checked;
			console.log(radio1Set2);
			var radio2Set2 = document.getElementById("radio2Set2").checked;
			console.log(radio2Set2);
			var radio3Set2 = document.getElementById("radio3Set2").checked;
			console.log(radio3Set2);

					if(radio1Set2 === true) {
						$("#imgResult2").show()
					} else if(radio2Set2 === true){
						$("#imgResult1").show()
					} else if(radio3Set2 === true){
						$("#imgResult3").show()
					} else{
						alert(msg);
					}

			var radio1Set3 = document.getElementById("radio1Set3").checked;
			console.log(radio1Set3);
			var radio2Set3 = document.getElementById("radio2Set3").checked;
			console.log(radio2Set3);
			var radio3Set3 = document.getElementById("radio3Set3").checked;
			console.log(radio3Set3);

					if(radio1Set3 === true) {
						$("#imgResult3").show()
					} else if(radio2Set3 === true){
						$("#imgResult2").show()
					} else if(radio3Set3 === true){
						$("#imgResult1").show()
					} else{
						alert(msg);
					}

	   });
	  });
	 });
  });
