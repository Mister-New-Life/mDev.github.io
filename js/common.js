$(document).ready(function() {

	particlesJS('particles-js',{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#f585b5"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6234266368894954,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 46.288401101176675,
        "size_min": 11.369080972218832,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 192.40944730386272,
      "color": "#ea0b6a",
      "opacity": 0.26456299004281125,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 700,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$('button.work').magnificPopup({type:'image'});

$('body').css('backgroundSize', '100%' + $(window).height()+'px');
$('.mnu').on('click',function(){
	 $(this).toggleClass('active')
	 	.next().toggleClass('active')
	 		.next().toggleClass('active');
});

function setToggleActive(elm,that){
	$(elm).removeClass('active');
  that.addClass('active');
};
$("nav ul li").on('click',function(){
	setToggleActive("nav ul li",$(this));
});
$(".portfolio .tab").on('click', function(){
	setToggleActive(".portfolio .tab",$(this));
	$('.tabs-content-wrap .tabs-content').removeClass('active');
	$('.tabs-content-wrap .tabs-content').eq($(this).index()).addClass('active');
});
$('ol.tabs-technology li').addClass('animated bounceInUp');

// portfolio block-left
$(".block-left .block-in-block button.icon").on('click',function(){
  $(".block-left .block-in-block").not($(this)
  	.parent(".block-in-block"))
  	.removeClass('active-block')
  	.find('.icon').removeClass('new-icon');
  $(this).parent(".block-in-block").toggleClass('active-block');
  $(this).toggleClass('new-icon');
});

 $("menu ul li a").on("click", function () {
   	var id  = $(this).attr('href'),
    		top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 700);
});

$('.svg-progress-demo1').svgprogress({
		figure: "hexagon",
		emptyFill: "#ccc" ,
		progressFill: '#fff',
		progressWidth: 3,
			onProgressState: function(state){
				if(state === 50){
					console.log('Progress state is equal '+ state);
				}
			},
				onAnimationComplate: function(){
					$('.svg-progress-demo1').addClass('load-complate');
		}
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000 && !$('.svg-progress-demo1').hasClass('load-complate') ) {
    	$('.svg-progress-demo1').trigger("redraw");
    }
});

console.log(dotNav);
// hParallax();
windowHeight($('header'));
windowHeight($('.wrap_header'));

var headerHeight = $("header").height();
var dotNav = $("nav ul li i.fa.fa-caret-right");

console.log(dotNav);
$(document).on("scroll",function(e){
	var scrlT = $(this).scrollTop();
	if(scrlT > headerHeight){
		dotNav.css('color', '#EA0B6A');
	}else{
		dotNav.css('color', '#fff');
	}
	console.log(headerHeight);
});
  $(".owl-header, .owl-port").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination: true,
      singleItem: true
  });  
});
function windowHeight(elem){
	elem.height($(window).height());
}
// function hParallax(){
// 	$('header').mousemove(function(e){
// 		// положение элемента
// 		var pos = $(this).offset();
// 		var elem_left = pos.left;
// 		var elem_top = pos.top;
// 		// положение курсора внутри элемента
// 		var Xinner = e.pageX - elem_left;
// 		var Yinner = e.pageY - elem_top;

// 		$(this)
// 		.css({
// 			backgroundPosition: -Yinner / 15+'px '+ (-Xinner / 20) +'px'
// 		}).find('.wrap_header')
// 		.css({
// 			backgroundPosition: Yinner / 20+'px '+ (Xinner / 30) +'px'
// 		})
// 		.children('h1').css({
// 			transform: 'translate(-'+ Yinner / 40 +'px, '+ Xinner / 50 +'px)'						
// 		});
// 	});
// };	

