let countdown = $("#countdown");
$("button").on("click", function() {
  let count = parseInt($("input").val());

  tick();

  function tick() {
    countdown.text(count);
    countdown.show();
    count--;
    if (count >= 0) {
      countdown.fadeOut(1000, tick);
    }
  }
});