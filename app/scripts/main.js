// Set element height based on height of reference element
function setHeight(target, reference) {
  var refHeight = $(reference).innerHeight();
  $(target).css('height', refHeight);
}

$(document).ready(function() {
  setHeight('.banner', window);
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight('.banner', window);
});

$(window).on( "orientationchange", function() {
  setHeight('.banner', window);
});
