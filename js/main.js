//--------------------------STICKY HEADER--------------------
window.onscroll = function() {myFunction()};
var header = document.querySelector(".header-gl");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

//---------------------------SMALL SCREEN MENU----------------
let hambBtn = document.querySelector('.hamb-btn');
let menu = document.querySelector('header nav');

hambBtn.addEventListener('click' , () => {
    menu.classList.toggle('menu-show')
    header.classList.toggle('header-menu-show')
})

//---------------------------SLIDER---------------------
$(function(){
$('.slick-service-slider').slick({
	autoplay: false,
	dots: true,
	infinite: false,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,
    rows: 0,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})
.on('setPosition', function (event, slick) {
	slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});
})