var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('.headerName').height();
    mbs = $('.menuBars')
var visible = false;


$(window).scroll(function() {
  if( $(this).scrollTop() > hdr) {
    mn.addClass(mns);
    // mn.addClass('navbar-fixed-top');
    console.log('fired')
    if(!visible) {
                    mn.prepend('<h3 class="logo col-lg-2 col-md-2 col-sm-2">Tyler Cecchi</h3>')
                    mbs.removeClass('col-lg-offset-5 col-md-offset-5 col-sm-offset-5')
                    mbs.addClass('col-lg-offset-7 col-md-offset-7 col-sm-offset-7')
                    $('header').css('border-bottom', 'none')
                    visible = true;
                }
  }

  else {
    mn.removeClass(mns);
    // mn.removeClass('navbar-fixed-top');
    if(visible)  {
                    $('.logo').remove()
                    mbs.addClass('col-lg-offset-5 col-md-offset-5 col-sm-offset-5')
                    mbs.removeClass('col-lg-offset-7 col-md-offset-7 col-sm-offset-7')
                    $('header').css('border-bottom', '5px solid black')

                    visible = false;
                }
  }
});
