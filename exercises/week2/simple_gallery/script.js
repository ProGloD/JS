$(".image").click(function(e) {
  let image = $(e.target).attr("src");
  $("#image").hide();
  $('#image').attr("src", image);
  $('#image').fadeIn('slow');
});