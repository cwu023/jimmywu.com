// Scroll Down Animation
$(function() {
  $(".scroll").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      600,
      "linear"
    );
  });
});

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

//Full page scroll
$(function() {
  $.scrollify({
    section: ".pg",
    scrollSpeed: 600,
    setHeights: false,
    easing: "linear"
  });
});
