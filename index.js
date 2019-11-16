$(document).ready(function() {
  // parallax
  $(window).bind("scroll", function() {
    parallax();
  });

  // smooth scroll
  var navbarHeight = $(".navbar").outerHeight(); // 65px
  $(".nav-link").click(function(e) {
    var targetHref = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top - navbarHeight
      },
      1000
    );
    e.preventDefault();
  });
});

function parallax() {
  var scrollPos = $(window).scrollTop();
  $(".header").css(
    "backgroundPositionY",
    Math.round((-$(".header").offset().top - scrollPos) * 0.2) - 300
  );
}
