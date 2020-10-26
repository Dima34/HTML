$('.header__mob-menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header__mob-menu-btn_active');
  });

  $(function($){
    $(".call__num-block-input").mask("+7 (999) 999-9999");
    $(".modal-call").mask("+7 (999) 999-9999");
 });

 $('.trust__footer-link').on('click', function(e) {
    e.preventDefault;
    $('.trust__footer-description').toggleClass('trust__footer-description--open');

  });
  
  $('.get-money__modal-block-text').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('get-money__modal-block-text--vis');
    });

    document.querySelector(".trust__footer-link").addEventListener("click", ()=>{
      document.querySelector(".trust__footer-link").style.display = "none";
    })
//  top menu
$("#about").click(function() {$('html, body').animate({scrollTop: $(".trust").offset().top}, 1000);});
$("#how-get").click(function() {$('html, body').animate({scrollTop: $(".fast").offset().top}, 1000);});
$("#how-invest").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#feedback").click(function() {$('html, body').animate({scrollTop: $(".feedback").offset().top}, 1000);});
$("#how-invest-btn").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#get-money").click(function() {$('html, body').animate({scrollTop: $(".get-money").offset().top}, 1000);});
$(".get-money__block-wrap").click(function() {$('html, body').animate({scrollTop: $(".get-money").offset().top}, 500);});
// footer menu
$("#about_footer").click(function() {$('html, body').animate({scrollTop: $(".trust").offset().top}, 1000);});
$("#how-get_footer").click(function() {$('html, body').animate({scrollTop: $(".fast").offset().top}, 1000);});
$("#how-invest_footer").click(function() {$('html, body').animate({scrollTop: $(".cooperation").offset().top}, 1000);});
$("#feedback_footer").click(function() {$('html, body').animate({scrollTop: $(".feedback").offset().top}, 1000);});


$(function() {
	var link = $('.header__mob-menu-block-link');
    var menu = $('.header__mob-menu-block');
	link.on('click', function(event) {
		event.preventDefault();
        menu.toggleClass('header__mob-menu-block_activ');
    });
});
