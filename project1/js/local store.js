$(document).ready(function () {
  $("button.london").click(function () {
    $("div.map").hide();
    $("div.london").show();
  });
  $("button.newyork").click(function () {
    $("div.map").hide();
    $("div.newyork").show();
  });
  $("button.paris").click(function () {
    $("div.map").hide();
    $("div.paris").show();
  });
});
