$('section').on('click', 'img, figcaption, description', function () {
  $(this).siblings('.description').addClass('showDescription');


  if($('.description').hasClass('clicked')) {
    $(this).siblings('.description').addClass('fadeOut');
    $(this).removeClass('fadeIn clicked');

    // $('figcaption').addClass('fadeInUp')
    // $('figcaption').removeClass('hide')

  }

  else {
    $(this).siblings('.description').addClass('fadeIn clicked');
    $(this).siblings('.description').removeClass('fadeOut');

    // $('figcaption').addClass('hide')
    // $('figcaption').removeClass('fadeInUp')
  }

  console.log('whee?')
})
