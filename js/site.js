$('html').addClass('js').removeClass('no-js');

$('a[href^="http"]').on('click', function(event) {
  window.open($(this).attr('href'), "_blank");
  event.preventDefault();
});

$('abbr[title]').one('click', function() {
  var expansion = $(this).attr('title');
  var abbr = $(this).text();
  $(this).text(expansion + " (" + abbr + ")");
  $(this).addClass('is-expanded');
});
