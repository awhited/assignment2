(function($) {
  $('#daform').on('submit', function(e) {
  e.preventDefault();
  console.log('*yodels');

  var $form = $(this).serialize();
  console.log($form);
  });

})(jQuery);

