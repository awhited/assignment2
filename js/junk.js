(function($) {

  $('#daform').on('submit', function(e) {
    e.preventDefault();
    console.log('nahh');
    var $form = $(this).serialize();
  });

})(jQuery);
