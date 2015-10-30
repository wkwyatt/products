$(document).ready(function() {
	function scaleSize(maxW, maxH, currW, currH) {
		var ratio = currH /currW;

		if (currW >= maxW && ratio <= 1) {
			currW = maxW;
			currH = currH * ratio;
		} else if (currH >= maxH) {
			currH = maxH;
			currW = currH / ratio;
		}

		return [currW, currH];
	}

	var maxWidth = $('.home-image-wrapper').width()
	// $('.home-image-wrapper img').height(maxWidth, 200, $(this).width(), $(this).height())[0]);
	$('.home-image-wrapper img').width(maxWidth, 200, $(this).width(), $(this).height())[1]);
});
	