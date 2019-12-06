$(".header-box .fa-bars").click( //OPENS MENU
  function(){
    $(".menu-box").show('slow');
  }
);

$(".menu-box .fa-remove").click( //CLOSE MENU
  function(){
    $(".menu-box").hide();
  }
);

$(".menu-box ul li a").click(
  function(){
    $(".menu-box").hide();
  }
);

// WARNING: CONTACT RESPONSIVENESS
$(".input-box a").click(
  function(){
    $(".input-box").animate(
      {
        left: '250px', opacity: '0.5', width: '0%'
      }
    );
    $(".contact-information").fadeIn('slow');

  }
);




$(window).bind('beforeunload', function(){
	return '>>>>>Before You Go<<<<<<<< \n Your custom message go here';
});




$(".scrollTo").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1500);
 });
