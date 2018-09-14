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

$(function() {
  $.scrollify({
    section: ".pg",
    scrollSpeed: 600,
    setHeights: false,
    easing: "linear"
  });
});
