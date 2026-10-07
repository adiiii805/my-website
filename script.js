$(function () {
  $("#year").text(new Date().getFullYear());

  // Dark mode toggle (remembered in the browser)
  if (localStorage.getItem("theme") === "dark") $("body").addClass("dark");
  $("#themeBtn").on("click", function () {
    $("body").toggleClass("dark");
    localStorage.setItem("theme", $("body").hasClass("dark") ? "dark" : "light");
  });

  // Animate skill bars on the resume page
  $(".bar-fill").each(function () {
    var level = $(this).data("level");
    var bar = $(this);
    setTimeout(function () { bar.css("width", level + "%"); }, 200);
  });

  // Contact form: validate and show a confirmation
  $("#msgForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#n").val().trim();
    $("#reply").text("Thank you, " + name + "! Your message has been received.").hide().fadeIn(600);
    this.reset();
  });
});
