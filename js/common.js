$(document).ready(function() {

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
// $('ul.tabs-technology li').addClass('animated bounceInUp');

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
			console.log('Progress complate!');
		}
});
$('.svg-progress-demo1').trigger("redraw");

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

