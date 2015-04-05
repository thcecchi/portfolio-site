$('.workItem').click(function () {
  var $this = $(this);
  if ($(this).is(':not(.active)')) {
    $(this).addClass('active')

    $(this).siblings('.workItem').addClass('invis')

    $(this).find('.links').removeClass('hide').addClass('animated fadeInUp')

    setTimeout(function() {
      $(this).find('.links').removeClass('hide')
    }, 1000);

  } else {
    $(this).removeClass('expand active');
    $(this).siblings('.workItem').removeClass('invis');
    $(this).find('.links').addClass('hide').removeClass('animated fadeOut')
  }
});
