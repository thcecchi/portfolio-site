$('.workItem').click(function () {
  var $this = $(this);
  if ($(this).is(':not(.active)')) {
    $(this).addClass('active')
    $(this).siblings('.workItem').addClass('hide')
    setTimeout(function() {
      $this.addClass('expand');
    }, 1000);

  } else {
    $(this).removeClass('active').removeClass('expand');
    $(this).siblings('.workItem').removeClass('hide')

  }
});
