
$(document).ready(function() {

	if (sessionStorage.length > 0) {

		$('.entry_screen').css('display', 'none');
		$('.play_btn').css('opacity', 1);
		$('.welcome').css('opacity', 1);

	} else {

		setTimeout(function() {
			$('.logo_yellow').addClass('yellow_move_anim');
			$('.logo_aqua').addClass('aqua_move_anim');
			$('.logo_pink').addClass('pink_move_anim');
		}, 500);
		setTimeout(function() {
			$('.entry_screen').addClass('entry_screen_anim');
		}, 2700);
		setTimeout(function() {
			$('.play_btn').addClass('fade_in_anim');
		}, 3500);
		setTimeout(function() {
			$('.welcome').addClass('fade_in_anim');
		}, 3700);

		sessionStorage.setItem('animation', 'complete');

	}
	

	var mainAudio = $('.main_audio_player');

	$('.play_btn').on('click', function() {
		playPause();
	});

	$(window).keypress(function (e) {
		if (e.keyCode === 0 || e.keyCode === 32) {
	    	e.preventDefault()
	    	playPause();
		}
	});

	mainAudio[0].addEventListener("ended", function(){
    	mainAudio[0].currentTime = 0;
    	$('.pause_bars').css('opacity', '0');
		$('.play_triangle').css('opacity', '1');
		$('.play_btn_orbit_circle').css('opacity', '0');
		$('.now_playing').css('opacity', '0');
        isPlaying = false;
    	console.log("ended");
	});

	// document.getElementsByClassName('.main_audio_player').addEventListener('ended', function(){
	// 	alert('WHOA DONE');
	// });

	$('.play_btn').mouseenter(function() {
		if (isPlaying == true) {
			$('.play_btn_orbit_circle').css('opacity', '0.8');
		} else {}
	}).mouseleave(function() {
		if (isPlaying == true) {
			$('.play_btn_orbit_circle').css('opacity', '0.5');
		} else {}	
	});

	var isPlaying = false;
	function playPause() {
		if (isPlaying == false) {
	        mainAudio[0].play();
	        $('.pause_bars').css('opacity', '1');
			$('.play_triangle').css('opacity', '0');
			$('.play_btn_orbit_circle').css('opacity', '0.5');
			$('.now_playing').css('opacity', '1');
	        isPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
			$('.now_playing').css('opacity', '0');
	        isPlaying = false;
	    }
	}



	$('#enter_link').click(function (e) {
	    e.preventDefault();                   // prevent default anchor behavior
	    var goTo = this.getAttribute("href"); // store anchor href

	    // do something while timeOut ticks ... 

	    $('body').addClass('fade_up_out_anim');

	    setTimeout(function(){
	         window.location = goTo;
	    }, 700);       
	});


	// $('.nav_item').mouseenter(function() {
	// 	$(this).addClass('text_color_fade_anim');
	// }).mouseleave(function() {
	// 	$(this).removeClass('text_color_fade_anim');
	// });


	function getPercentProg() {
	    var mainAudio = $('.mainAudio');
	    var endBuf = mainAudio.buffered.end(0);
	    var soFar = parseInt(((endBuf / mainAudio.duration) * 100));
	    console.log(soFar + '%');
	}


	// $(window).unload(function() {
	// 	if (localStorage) {
	// 		localStorage.removeItem('animation');
	// 	}
	// });

});