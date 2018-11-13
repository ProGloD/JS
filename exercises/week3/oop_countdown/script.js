let div = $("#countdown");
$("button").on("click", function() {
  let count = parseInt($("input").val());
  let countdown = new Countdown(count);

  div.append(countdown.span);
  countdown.tick();
});

function Countdown(count) {
  let _this = this;
  _this.span = $("<span>");
  _this.count = count;
  _this.tick = (e) => {
    _this.span.text(_this.count);
    _this.span.show();
    _this.count--;
    if (_this.count >= 0) {
      _this.span.fadeOut(1000, _this.tick);
    }
  }
}