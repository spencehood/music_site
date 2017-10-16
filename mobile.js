$(document).ready(function() {

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
			}, 600);
			setTimeout(function() {
				$('.close_icon').css('opacity', '1');
			}, 1100);
		}, 200);
		
	}

	function closeMePage() {
		// $('.me_page').css('transform', 'translateX(-100%)');
		// $('.close_me').removeClass('close_bounce_anim');

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
		}
		if (oneIsPlaying == false) {
	        mainAudio[0].play();
	        oneIsPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        oneIsPlaying = false;
	    }
	}

	function playPauseTwo(audio_obj) {
		var mainAudio = audio_obj;
		var allAudios = document.getElementsByTagName('audio');
		for (var i = 0; i < allAudios.length; i++) {
			allAudios[i].pause();
		}
		if (twoIsPlaying == false) {
	        mainAudio[0].play();
	        twoIsPlaying = true;
	    } else {
	        mainAudio[0].pause();
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

	function playAudio(audio_obj) {
		
	}

	function pauseAudio(audio_obj) {
		audio_obj[0].pause;
	}














	$("#emailSubmit").submit(function() {
        // Checking to make sure none of the fields were left blank (except spam field)
        // TODO also add some spam validating AND email address validating
        if ($('#email').val() != '' && $('#email').val().indexOf("@") >= 0 && $('#email').val().indexOf(".") >= 0) {
            // Doing all the things specified in contact-mail.php, just staying on the same page
            $.post('email_submit.php', {
                email: $('#email').val(),
                submit: 'yes'},
                function(data) {
                    // alert('working');
                    $('#email').val(''); /* Clear the inputs */
                }, 'text');
            $('#submit').innerHTML('Heck yeah');
            // $('#submit').css('background', 'rgb(76, 216, 90)');
            return false;
        } else {
            // Display the warning telling the user not to leave any fields blank
            alert('Please provide a valid email address.');
            return false;
        }
    });


});