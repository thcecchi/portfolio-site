$('section').on('click', 'img', function () {
  $(this).siblings('.description').addClass('showDescription');

  $('figcaption').toggleClass('hide')

  if($('.description').hasClass('clicked')) {
    $(this).siblings('.description').addClass('fadeOutUp');
    $(this).siblings('.description').removeClass('fadeInDown clicked');

    $('figcaption').addClass('fadeOutDown')
    $('figcaption').removeClass('fadeinUp')

  }

  else {
    $(this).siblings('.description').addClass('fadeInDown clicked');
    $(this).siblings('.description').removeClass('fadeOutUp');

    $('figcaption').addClass('fadeInUp')
    $('figcaption').removeClass('fadeOutDown')
  }


  console.log('whee?')
})
