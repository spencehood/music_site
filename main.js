
$(document).ready(function() {

	// if (sessionStorage.length > 0) {

	// 	$('.entry_screen').css('display', 'none');
	// 	$('.play_btn').css('opacity', 1);
	// 	$('.welcome').css('opacity', 1);

	// } else {

		setTimeout(function() {
			$('.logo_yellow').addClass('yellow_move_anim');
			$('.logo_aqua').addClass('aqua_move_anim');
			$('.logo_pink').addClass('pink_move_anim');
		}, 500);
		setTimeout(function() {
			// $('.bar1').addClass('bar_slide_anim');
		}, 2300);
		setTimeout(function() {
			$('.entry_screen').addClass('entry_screen_anim');
			// $('.bar2').addClass('bar_rotate_anim');
		}, 2700);
		setTimeout(function() {
			$('.play_btn').addClass('fade_in_anim');
			
		}, 3500);
		setTimeout(function() {
			$('.welcome').addClass('fade_in_anim');
		}, 3700);
		// setTimeout(function() {
			// $('#about_content').delay(4000).fadeIn(400);
		// }, 4000);

		sessionStorage.setItem('animation', 'complete');

	// }

	console.log(window.pageYOffset);
	if (window.pageYOffset == 0) {
		console.log('wowowowow');
		$('.home_body').css('overflow-y', 'hidden');
	}

	$('#home_nav').on('click', function() {
		scrollToItem(document.getElementById('home_content'));
	});

	var vidSource1 = 'https://www.youtube.com/embed/cfrdyISpVRc';
	var vidSource2 = 'https://www.youtube.com/embed/Qg-7NgxHnBA';
	var vidSource3 = 'https://www.youtube.com/embed/Svo1GhJ9_M0';
	// var vidSource3 = 'https://www.youtube.com/embed/tg7BprmHIws';

	setTimeout(function() {
		$('.frame1').attr('src', vidSource1);
		$('.frame2').attr('src', vidSource2);
		$('.frame3').attr('src', vidSource3);
	}, 5000); 
	

	var mainAudio = $('.main_audio_player');

	$('.play_btn').on('click', function() {
		playPause();
		// $('.play_btn').addClass('play_btn_move_anim');
		// $('.play_triangle').addClass('play_triangle_shrink_anim');
		// $('.now_playing').css('left', '80px');
	});
	$('.play_btn_mini').on('click', function() {
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
	        $('.play_btn_mini').css('opacity', '1');
	        $('.pause_bars').css('opacity', '1');
			$('.play_triangle').css('opacity', '0');
			$('.play_btn_orbit_circle').css('opacity', '0.5');
			$('.now_playing').css('opacity', '1');
			$('.pause_bars_mini').css('opacity', '1');
			$('.play_triangle_mini').css('opacity', '0');
	        isPlaying = true;
	    } else {
	        mainAudio[0].pause();
	        $('.pause_bars').css('opacity', '0');
			$('.play_triangle').css('opacity', '1');
			$('.play_btn_orbit_circle').css('opacity', '0');
			$('.pause_bars_mini').css('opacity', '0');
			$('.play_triangle_mini').css('opacity', '1');
			$('.now_playing').css('opacity', '0');
	        isPlaying = false;
	    }
	}

	function scrollToItem(item) {
	    var diff = (item.offsetTop-window.scrollY) / 15;
	    if (Math.abs(diff) > 1) {
	        window.scrollTo(0, (window.scrollY + diff + 7));
	        clearTimeout(window._TO);
	        window._TO = setTimeout(scrollToItem, 30, item);
	    } else {
	        window.scrollTo(0, item.offsetTop);
	    }
	}

	$('#enter_link').click(function (e) {
	    // e.preventDefault();                   // prevent default anchor behavior
	    // var goTo = this.getAttribute("href"); // store anchor href

	// do something while timeOut ticks ... 

	    // $('.home_content').addClass('fade_up_out_anim');

	    // $('html, body').animate({
	    //     scrollTop: $("#about_content").offset().top
	    // }, 1000, 'swing');

	    // $('.home_content').animate({
	    //     top: '-100%'
	    // }, 1000, 'swing');

	    $('.home_body').css('overflow-y', 'visible');
	    console.log('her so fer');
	    $('.play_btn_mini').css('opacity', '1');
	    var about_content = document.getElementById('about_content');
	    scrollToItem(about_content);
	    setTimeout(function() {
	    	$('#enter_link').css('display', 'none');
	    }, 1000);

	    // $('.p1').css('opacity', '1');
	    // setTimeout( function() {
	    // 	$('.p1').css('opacity', '0');
	    // 	$('.p1').css('display', 'none');
	    // 	$('.p2').css('opacity', '1');
    	// 	setTimeout( function() {
    	// 		$('.p2').css('display', 'none');
		   //  	$('.p3').css('opacity', '1');
		   //  	setTimeout( function() {
		   //  		$('.p3').css('display', 'none');
			  //   	$('.p4').css('opacity', '1');
		   //  		setTimeout( function() {
		   //  			$('.p4').css('display', 'none');
				 //    	$('.pfull').css('opacity', '1');
				 //    }, 500);
			  //   }, 500);
		   //  }, 500);
	    // }, 500);

     
	});

	$("#myform").submit(function() {
        // Checking to make sure none of the fields were left blank (except spam field)
        if ($('#name').val() != '' && $('#email').val() != '' && $('#message').val() != '' && $('#spam').val() == '') {
            // Checking to make sure the email provided includes an ampersand (@)
            if ($('#email').val().indexOf("@") >= 0) {
                // Doing all the things specified in contact-mail.php, just staying on the same page
                $.post('contact.php', {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#message').val(),
                    submit: 'yes'},
                    function(data) {
                        // alert('working');
                        $('#name, #email, #message').val(''); /* Clear the inputs */
                    }, 'text');
                $('#submit').attr('value', 'Email Sent');
                $('#submit').css('background', 'rgb(76, 216, 90)');
                return false;
            } else {
                // Display the warning telling the user to provide a valid email address
                alert('Please provide a valid email address.');
                return false;
            }
        } else {
            // Display the warning telling the user not to leave any fields blank
            alert('Please fill out all required fields, and leave the last one blank.');
            return false;
        }
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

	// function doScrolling(elementY, duration) { 
	//   var startingY = window.pageYOffset  
	//   var diff = elementY - startingY  
	//   var start

	//   // Bootstrap our animation - it will get called right before next frame shall be rendered.
	//   window.requestAnimationFrame(function step(timestamp) {
	//     if (!start) start = timestamp
	//     // Elapsed miliseconds since start of scrolling.
	//     var time = timestamp - start
	//     // Get percent of completion in range [0, 1].
	//     var percent = Math.min(time / duration, 1)

	//     window.scrollTo(0, startingY + diff * percent)

	//     // Proceed with animation as long as we wanted it to.
	//     if (time < duration) {
	//       window.requestAnimationFrame(step)
	//     }
	//   })
	// }

});