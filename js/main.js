$(document).ready
(
	function(){

		$(window).scroll(function(){ 

		var a = 0;
		var pos = $(window).scrollTop();
		if(pos > a) {
		    $("div#my-portfolio-navbar-collapse").css({
		                'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'
		            });
		} else {
		    $("#my-portfolio-navbar-collapse").css({
		                'box-shadow': 'none',
		                
		            });
		}

		});

		$(".pikaboo-footer-image-hands").mouseenter(function(){
			$(".pikaboo-footer-image-face").animate({
			    "top": "-18px"
		  	}, 100);
		});
		$(".pikaboo-footer-image-hands").mouseleave(function(){
			$(".pikaboo-footer-image-face").animate({
			    "top": "0"
		  	}, 100);
		});

		var socialIconWidth = $(".social-icon i").width;

		$(".navbar-collapse li").click
		(
			function()
			{
				$('.navbar-collapse').collapse('hide');
			}
			);


		$(".about-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".about").offset().top
		        	},'slow'
		        );
			}
		);

		$(".works-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".works").offset().top
		        	},'slow'
		        );
			}
		);


		$(".contact-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".contact").offset().top
		        	},'slow'
		        );
			}
		);


		$('#back-to-top').each(function(){
		    $(this).click(function(){ 
		        $('html,body').animate({ scrollTop: 0 }, 'slow');
		        return false; 
		    });
		});

		$(window).scroll(function()
			{
				if($(window).scrollTop()>500)
				{
					$('#back-to-top').css("opacity","1");
				}
				else
				{
					$('#back-to-top').css("opacity","0");
				}
			}
		);

	},
	cssChanger()

);

window.onresize= function()
{
	cssChanger();

}



function cssChanger()
{			

	if($(".website-header-navbar").width() < 720)
	{
		var page_url = window.location.href;
		if(page_url.includes("/work/"))
		{
			$('link[id="mobileCSS"]').attr('href','../css/mobile-index.css');
		}
		else
		{
			$('link[id="mobileCSS"]').attr('href','css/mobile-index.css');
		}

	}

	else
	{
		$('link[id="mobileCSS"]').attr('href','');
	}
}