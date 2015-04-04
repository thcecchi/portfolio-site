$('.workItem').click(function () {
  var $this = $(this);
  if ($(this).is(':not(.active)')) {
    $(this).addClass('active')

              // Pull workItem to center /////////////
              ///////////////////////////////////////
                  $(function(){
                  var $cards = $('.workItem');
                  var cardInFocus = null;

                  $cards.each(function(index, elem){
                      var $elem = $(elem);
                      var pos = $elem.position();
                      $(elem).data('orig-x', pos.left);
                      $(elem).data('orig-y', pos.top);
                  });

                  var reset = function(){
                      if(cardInFocus){
                          $(cardInFocus).transition({x:0,y:0});
                      };
                  };

                  $cards.focus(function(e){
                    console.log('fired!!!!!!!!!!!!!')
                      reset();
                      cardInFocus = this;
                      var $doc = $(document);
                      var centerX = $doc.width() / 2;
                      var centerY = $doc.height() / 2;
                      var $card = $(this);
                      var origX = $card.data('orig-x');
                      var origY = $card.data('orig-y');
                      $(this).transition({x:centerX - origX,y:centerY-origY});
                  });

                  $cards.blur(function(e){
                      reset();
                  });

              });
              ///////////////////////////////////////

    $(this).siblings('.workItem').removeClass('bounceInRight').css('z-index', '-999999').addClass('invis')

    // $(this).siblings('.workItem').addClass('bounceOutRight')

    setTimeout(function() {
      $this.addClass('expand');
    }, 2000);

  } else {
    $(this).removeClass('active').removeClass('expand');
    $(this).siblings('.workItem').removeClass('invis');

  }
});
