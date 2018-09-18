// Scroll Down Animation
$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate(
      { scrollTop: $("#section02").offset().top },
      "slow"
    );
    return false;
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
