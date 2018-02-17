		$(document).ready(function(){
			$('.clients-slider').slick({
			  dots: true,
			  infinite: true,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 2200,
          responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        infinite: true,
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        infinite: true,
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    ]
		   
		    });
		});