$(document).ready(function() {

	$('.me_link').on('click', meSlide);
	$('.tunes_link').on('click', tunesSlide);
	$('.close_me').on('click', closeMePage);
	$('.close_tunes').on('click', closeTunesPage);
	
	function meSlide() {
		// $('.me_page').addClass('me_page_slide_anim');
		$('.me_page').css('transform', 'translateX(0)');
		setTimeout(function() {
			$('.close_me').addClass('close_bounce_anim');
		}, 300);
	}

	function tunesSlide() {
		// $('.tunes_page').addClass('tunes_page_slide_anim');
		$('.tunes_page').css('transform', 'translateX(0)');
		setTimeout(function() {
			$('.close_tunes').css('display', 'block');
			$('.close_tunes').addClass('close_bounce_anim');
		}, 300);
	}

	function closeMePage() {
		$('.me_page').css('transform', 'translateX(-100%)');
		$('.close_me').removeClass('close_bounce_anim');
	}

	function closeTunesPage() {
		$('.tunes_page').css('transform', 'translateX(100%)');
		$('.close_tunes').css('display', 'none');
		$('.close_tunes').removeClass('close_bounce_anim');
	}


	$('.play_btn').on('click', function() {
		playPause();

	});

	var isPlaying = false;
	function playPause() {
		if (isPlaying == false) {
	        mainAudio[0].play();
	        $('.pause_bars').css('opacity', '1');
			$('.play_triangle').css('opacity', '0');
			$('.play_btn_orbit_circle').css('opacity', '0.5');
			// $('.now_playing').css('opacity', '1');
	        isPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
			// $('.now_playing').css('opacity', '0');
	        isPlaying = false;
	    }
	}


});