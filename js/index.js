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













$(".scrollTo").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 1500);
 });
