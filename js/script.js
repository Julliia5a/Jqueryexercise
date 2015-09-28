$(document).ready(function() {
	$("#one").delay(1000).fadeOut("slow");
	$("#one").fadeIn("fast");



			$("#purple").mouseenter(function() {
				$("#purple").fadeTo("fast", 0.5);
			});

			$("#purple").mouseleave(function() {
				$("#purple").fadeTo("fast", 1);
			});
			$("#pink").mouseenter(function() {
				$("#pink").fadeTo("fast", 0.5);
			});

			$("#pink").mouseleave(function() {
				$("#pink").fadeTo("fast", 1);
			});
			$("#green").mouseenter(function() {
				$("#green").fadeTo("fast", 0.5);
			});

			$("#green").mouseleave(function() {
				$("#green").fadeTo("fast", 1);
			});
			$("#orange").mouseenter(function() {
				$("#orange").fadeTo("fast", 0.5);
			});

			$("#orange").mouseleave(function() {
				$("#orange").fadeTo("fast", 1);
			});
			$("#blue2").mouseenter(function() {
				$("#blue2").fadeTo("fast", 0.5);
			});

			$("#blue2").mouseleave(function() {
				$("#blue2").fadeTo("fast", 1);
			});
			$("#yellow").mouseenter(function() {
				$("#yellow").fadeTo("fast", 0.5);
			});

			$("#yellow").mouseleave(function() {
				$("#yellow").fadeTo("fast", 1);
			});
			$("#red").mouseenter(function() {
				$("#red").fadeTo("fast", 0.5);
			});

			$("#red").mouseleave(function() {
				$("#red").fadeTo("fast", 1);
			});
			$("#black2").mouseenter(function() {
				$("#black2").fadeTo("fast", 0.5);
			});

			$("#black2").mouseleave(function() {
				$("#black2").fadeTo("fast", 1);
			});
			$("#grey").mouseenter(function() {
				$("#grey").fadeTo("fast", 0.5);
			});

			$("#grey").mouseleave(function() {
				$("#grey").fadeTo("fast", 1);
			});
			$("#brown").mouseenter(function() {
				$("#brown").fadeTo("fast", 0.5);
			});

			$("#brown").mouseleave(function() {
				$("#brown").fadeTo("fast", 1);
			});
			$("#pink2").mouseenter(function() {
				$("#pink2").fadeTo("fast", 0.5);
			});

			$("#pink2").mouseleave(function() {
				$("#pink2").fadeTo("fast", 1);
			});
			$("#green2").mouseenter(function() {
				$("#green2").fadeTo("fast", 0.5);
			});

			$("#green2").mouseleave(function() {
				$("#green2").fadeTo("fast", 1);
			});

			$("#yellow2").mouseenter(function() {
				$("#yellow2").fadeTo("fast", 0.5);
			});

			$("#yellow2").mouseleave(function() {
				$("#yellow2").fadeTo("fast", 1);
			});
			$("#purple2").mouseenter(function() {
				$("#purple2").fadeTo("fast", 0.5);
			});

			$("#purple2").mouseleave(function() {
				$("#purple2").fadeTo("fast", 1);
			});

				$("#purple2").animate({width: "400px", height: "40px"}, 2000);

					$("#purple").click(function() {
					$("#purple").animate({top: "+=700px"}, 300);
				});

				$("#orange").animate({width: "400px", height: "40px"}, 2000);

					$("#orange").click(function() {
					$("#orange").animate({top: "+=700px"}, 300);
				});

				$("#box").click(function(){
					$("#pink").animate({top: "+=700px"}, 300);
					$("#pink2").animate({top: "+=700px"}, 300);
					$("#green").animate({top: "+=700px"}, 300);
					$("#green2").animate({top: "+=700px"}, 300);
					$("#blue2").animate({top: "+=700px"}, 300);
					$("#grey").animate({top: "+=700px"}, 300);
					$("#purple").animate({top: "+=200px"}, 100);
					$("#brown").animate({top: "+=700px"}, 300);
					$("#yellow2").animate({top: "+=700px"}, 300);
					$("#black2").animate({top: "+=700px"}, 300);
					$("#red").animate({top: "+=700px"}, 300);
					$("#yellow").animate({top: "+=700px"}, 300);
					$("#purple2").animate({top: "+=700px"}, 300);
					$("#orange").animate({top: "+=300px"}, 300);
				});
$("#box2").click(function(){
					$("#pink").animate({top: "50px"}, 310);
					$("#pink2").animate({top: "300px"}, 320);
					$("#green").animate({top: "100px"}, 330);
					$("#green2").animate({top: "300px"}, 290);
					$("#blue2").animate({top: "150px"}, 280);
					$("#grey").animate({top: "250px"}, 340);
					$("#purple").animate({top: "50px"}, 2700);
					$("#brown").animate({top: "250px"}, 260);
					$("#yellow2").animate({top: "350px"}, 350);
					$("#black2").animate({top: "200px"}, 360);
					$("#red").animate({top: "200px"}, 370);
					$("#yellow").animate({top: "150px"}, 250);
					$("#purple2").animate({top: "350px"}, 300);
					$("#orange").animate({top: "100px"}, 310);
				});



	$("p").click(function(){
		$("p").toggleClass("new");
	});

	$("#box").click(function(){
		$("#window").fadeToggle(500);
	});

	slide ();
	function slide() {
	$("#black").animate({left: "200px"}, 2000);
	$("#black").animate({left: "50px"}, 2000, slide);
}

});

