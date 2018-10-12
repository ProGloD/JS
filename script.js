var body = document.querySelector("body");
var t_light = "t-light";
var t_dark = "t-dark";
var t_icon = document.querySelector(".material-icons")
var change_theme = document.querySelector(".change-theme");

change_theme.addEventListener("click", function() {
  if (body.classList.contains(t_light)) {
    t_icon.textContent = "brightness_5";
    change_theme.classList.remove(t_light);
    change_theme.classList.add(t_dark);
    body.classList.remove(t_light);
    body.classList.add(t_dark);
  } else {
    t_icon.textContent = "brightness_4";
    change_theme.classList.remove(t_dark);
    change_theme.classList.add(t_light);
    body.classList.remove(t_dark);
    body.classList.add(t_light);
  }
});