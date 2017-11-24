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
$('ul.tabs-technology li').addClass('animated bounceInUp');

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
tile();

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

	// smoof-scroll
	var navigation_links = jQuery("menu a");
	navigation_links.click( function(event) {
		event.preventDefault();
		jQuery.scrollTo(
			jQuery(this).attr("href"),
			{
				duration: 600,
				offset: { 'left':0, 'top':-0.05*jQuery(window).height() }
			}
		);
	});		
	jQuery('section').waypoint({
		handler: function(event, direction) {
			var active_section = jQuery(this);			
			if (direction === "up") active_section = active_section.prev();
			var active_link = jQuery('menu a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("active_nav");
			active_link.addClass("active_nav");
		},
		offset: '5%'
	});

function tile(){
	var main = $('#container');
	var item = $('.tile');
	var itemLength = item.length;

	var firstCol = $('#container .tile:nth-child(3n+1)');
	var secondCol = $('#container .tile:nth-child(3n+2)');
	var firdCol = $('#container .tile:nth-child(3n+3)');

	var firstColSmall = $('#container .tile:nth-child(2n+3)');
	var secondColSmall = $('#container .tile:nth-child(2n+2)');
if($(window).width() > 767){
	firstCol.wrapAll('<div class="firstCol"></div>');
	secondCol.wrapAll('<div class="secondCol"></div>');
	firdCol.wrapAll('<div class="firdCol"></div>');
}else{
	firstColSmall.wrapAll('<div class="firstColSmall"></div>');
	secondColSmall.wrapAll('<div class="secondColSmall"></div>');
}

	var fl = firstCol.length;
	var sl = secondCol.length;
	var fil = firdCol.length;
}
