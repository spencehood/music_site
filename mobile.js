$(document).ready(function() {



	window.addEventListener ? 
	window.addEventListener('load', whenPageLoads, false) : 
	window.attachEvent && window.attachEvent('onload', whenPageLoads);
	function whenPageLoads() {
		
		setTimeout(function() {
			$('#landing_screen').css({'opacity': '0', 'visibility': 'hidden'});
		}, 2000);
		setTimeout(function() {
			$('.upper_section').css({'opacity': '1'});
		}, 2800);
		setTimeout(function() {
			$('.lower_section').css({'opacity': '1'});
		}, 3000);
		setTimeout(function() {
			$('.mid_section').css({'opacity': '1'});
		}, 3200);
	}


	window.scrollTo(0, 0);

	var vidSource1 = 'https://www.youtube.com/embed/cfrdyISpVRc';
	var vidSource2 = 'https://www.youtube.com/embed/Qg-7NgxHnBA';
	var vidSource3 = 'https://www.youtube.com/embed/Svo1GhJ9_M0';
	var iframesLoaded = false;

	$('.me_link').on('click', meSlide);
	$('.tunes_link').on('click', tunesSlide);
	$('.close_me').on('click', closeMePage);
	$('.close_tunes').on('click', closeTunesPage);
	
	function meSlide() {
		window.scrollTo(0, 0);
		$('body').css('overflow-y', 'visible');
		$('.upper_section').css({'opacity': '0'});
		setTimeout(function() {
			$('.mid_section').css({'opacity': '0'});
		}, 100);
		setTimeout(function() {
			$('.lower_section').css({'opacity': '0'});
			setTimeout(function() {
				$('.me_screen').css('left', '0');
			}, 200);
			setTimeout(function() {
				$('.me_page').css('transform', 'translateX(0)');
			}, 400);
			setTimeout(function() {
				$('.close_me').addClass('close_bounce_anim');
			}, 600);
			setTimeout(function() {
				$('.close_icon').css('opacity', '1');
			}, 1100);
		}, 200);
	}

	function tunesSlide() {
		window.scrollTo(0, 0);
		$('body').css('overflow-y', 'visible');
		$('.upper_section').css({'opacity': '0'});
		setTimeout(function() {
			$('.mid_section').css({'opacity': '0'});
		}, 100);
		setTimeout(function() {
			$('.lower_section').css({'opacity': '0'});
			setTimeout(function() {
				$('.tunes_screen').css('right', '0');
			}, 200);
			setTimeout(function() {
				$('.tunes_page').css('transform', 'translateX(0)');
			}, 400);
			setTimeout(function() {
				$('.close_tunes').css('display', 'block');
				$('.close_tunes').addClass('close_bounce_anim');
				if (!iframesLoaded) {
					$('.frame1').attr('src', vidSource1);
					$('.frame2').attr('src', vidSource2);
					$('.frame3').attr('src', vidSource3);
					iframesLoaded = true;
				}
			}, 800);
			setTimeout(function() {
				$('.close_icon').css('opacity', '1');
			}, 1100);
		}, 200);
		
	}

	function closeMePage() {
		// $('.me_page').css('transform', 'translateX(-100%)');
		// $('.close_me').removeClass('close_bounce_anim');
		$('body').css('overflow-y', 'hidden');
		$('.me_page').css('transform', 'translateX(-103%)');
		setTimeout(function() {
			$('.me_screen').css('left', '-103%');
		}, 100);
		$('.close_me').removeClass('close_bounce_anim');
		$('.close_icon').css('opacity', '0');
		setTimeout(function() {
			$('.upper_section').css({'opacity': '1'});
			$('.mid_section').css({'opacity': '1'});
			$('.lower_section').css({'opacity': '1'});
		}, 300);
	}

	function closeTunesPage() {
		$('body').css('overflow-y', 'visible');
		$('.tunes_page').css('transform', 'translateX(103%)');
		setTimeout(function() {
			$('.tunes_screen').css('right', '-103%');
		}, 100);
		$('.close_tunes').css('display', 'none');
		$('.close_tunes').removeClass('close_bounce_anim');
		$('.close_icon').css('opacity', '0');
		setTimeout(function() {
			$('.upper_section').css({'opacity': '1'});
			$('.mid_section').css({'opacity': '1'});
			$('.lower_section').css({'opacity': '1'});
		}, 300);
	}

	var isPlaying = false;
	var mainIsPlaying = false;
	var oneIsPlaying = false;
	var twoIsPlaying = false;

	$('.play_btn').on('click', function() {
		playPauseMain($('.main_audio_player'));
	});
	$('.audio_clips .btn1').on('click', function() {
		playPauseOne($('.audio_player1'));
	});
	$('.audio_clips .btn2').on('click', function() {
		playPauseTwo($('.audio_player2'));
	});


	function playPauseMain(audio_obj) {
		var mainAudio = audio_obj;
		var allAudios = document.getElementsByTagName('audio');
		for (var i = 0; i < allAudios.length; i++) {
			allAudios[i].pause();
			oneIsPlaying = false;
			twoIsPlaying = false;
		}
		if (mainIsPlaying == false) {
	        mainAudio[0].play();
	        mainIsPlaying = true;
	        $('.pause_bars').css('opacity', '1');
			$('.play_triangle').css('opacity', '0');
			$('.play_btn_orbit_circle').css('opacity', '0.5');
	    } else {
	        mainAudio[0].pause();
	        mainIsPlaying = false;
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
	    }
	}

	function playPauseOne(audio_obj) {
		var mainAudio = audio_obj;
		var allAudios = document.getElementsByTagName('audio');
		for (var i = 0; i < allAudios.length; i++) {
			allAudios[i].pause();
			mainIsPlaying = false;
			twoIsPlaying = false;
		}
		if (oneIsPlaying == false) {
	        mainAudio[0].play();
	        $('.apb1').css('opacity', '1');
	        $('.apt1').css('opacity', '0');
	        $('.apt2').css('opacity', '1');
	        $('.apb2').css('opacity', '0');
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
	        oneIsPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        $('.apt1').css('opacity', '1');
	        $('.apb1').css('opacity', '0');
	        oneIsPlaying = false;
	    }
	}

	function playPauseTwo(audio_obj) {
		var mainAudio = audio_obj;
		var allAudios = document.getElementsByTagName('audio');
		for (var i = 0; i < allAudios.length; i++) {
			allAudios[i].pause();
			mainIsPlaying = false;
			oneIsPlaying = false;
		}
		if (twoIsPlaying == false) {
	        mainAudio[0].play();
	        $('.apb2').css('opacity', '1');
	        $('.apt2').css('opacity', '0');
	        $('.apt1').css('opacity', '1');
	        $('.apb1').css('opacity', '0');
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
	        twoIsPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        $('.apt2').css('opacity', '1');
	        $('.apb2').css('opacity', '0');
	        twoIsPlaying = false;
	    }
	}

	// function playPause(audio_obj) {
	// 	var mainAudio = audio_obj;
	// 	// console.log(mainAudio);
	// 	var allAudios = document.getElementsByTagName('audio');
	// 	for (var i = 0; i < allAudios.length; i++) {
	// 		allAudios[i].pause();
	// 	}
	// 	if (isPlaying == false) {
	//         mainAudio[0].play();
	//         isPlaying = true;
	//     } else {
	//         mainAudio[0].pause();
	//         isPlaying = false;
	//     }
	// }


});