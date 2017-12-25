$(document).ready(function() {
  $("nav a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this,"href")).offset().top - 60
      }, 800);
  });
});