//Scroll Top Animation
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#topArrow").fadeIn();
  } else {
    $("#topArrow").fadeOut();
  }
});
$(document).ready(function() {
  $("#topArrow").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
