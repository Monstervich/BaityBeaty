$(document).ready(function(){
	$('.toggle').on('click', function(){
		$('.toggle').parent().removeClass('active');
		$('#nav-bar').removeClass('spn-nav');
		$(this).parent().addClass('active');
		
		$('#landing-page').css({"transform" : "translateX(100%)"});
		$('#landing-page').delay(500).fadeOut();

		$('.x').css({"transform" : "translateX(100%)"});
		$('.-x').css({"transform" : "translateX(-100%)"});
		$('.y').css({"transform" : "translateY(100%)"});
		$('.-y').css({"transform" : "translateY(-100%)"});
		$('.spn-page').css({"transform" : "translateY(-100%)"});

		if($(this).attr('id').match('abt-btn')){
			$('#abt').css({"transform" : "translateX(0%)"});

		}else if($(this).attr('id').match('com-btn')){
			$('#com').css({"transform" : "translateY(0%)"});

		}else if($(this).attr('id').match('jrn-btn')){
			$('#jrn').css({"transform" : "translateY(0%)"});

		}else if($(this).attr('id').match('spn-btn')){
			$('#spn').css({"transform" : "translateX(0%)"});

		}else if($(this).attr('id').match('news-btn')){
			$('#news').css({"transform" : "translateY(0%)"});

		}else if($(this).attr('id').match('con-btn')){
			$('#con').css({"transform" : "translateX(0%)"});

		}else if($(this).attr('class').match('art-btn')){
			$('#news-btn').parent().addClass('active');
			$('#nav-bar').addClass('spn-nav');

			if($(this).attr('id').match('art-btn-1')){
				$('#art-1-page').css({"transform" : "translateY(100%)"});

			}else if($(this).attr('id').match('art-btn-2')){
				$('#art-2-page').css({"transform" : "translateY(100%)"});
			}

		}else if($(this).attr('class').match('spn-logos')){
			$('#spn-btn').parent().addClass('active');
			$('#nav-bar').addClass('spn-nav');

			if($(this).attr('id').match('ta-logo')){
				$('#ta-page').css({"transform" : "translateY(0%)"});

			}else if($(this).attr('id').match('trox-logo')){
				$('#trox-page').css({"transform" : "translateY(0%)"});
			}
		}

	});
});