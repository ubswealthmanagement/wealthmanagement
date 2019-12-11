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
$(".opens-contact-btn").click(
  function(){
    $(".input-box").hide();
    $(".contact-information-box").fadeIn('slow');
    setTimeout(
      function(){
        $(".goback-box").show();
      }, 2000
    );

  }
);
$(".goback-box").click(
  function(){
    $(".contact-information-box").fadeOut();
    setTimeout(
      function(){
        $(".input-box").fadeIn();
        $(".goback-box").hide();
      },2000
    );
  }
);
$(".locate-btn").click(
  function(){
    $(".input-box").hide();
    $(".location-box").slideDown();
    setTimeout(
      function(){
        //$(".")
      },2000
    );
  }
);






$(".scrollTo").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1500);
 });
