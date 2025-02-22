$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".cake").removeClass("closeCake").removeClass("openedCake").addClass("openCake");
		$(".container").stop().animate({"backgroundColor": "#ffeb3b"}, 2000); // Updated color for birthday theme
		console.log("Opening");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".cake").removeClass("openCake").removeClass("openedCake").addClass("closeCake");
		$(".container").stop().animate({"backgroundColor": "#ffe082"}, 2000); // Updated color for birthday theme
		console.log("Closing");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".cake").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".cake").hasClass("closeCake"))
		$(".cake").addClass("openedCake").addClass("beating");
	else
		$(".cake").addClass("no-anim").removeClass("beating");
	$(".cake").removeClass("openCake").removeClass("closeCake");
});
