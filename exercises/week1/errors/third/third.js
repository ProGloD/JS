function onClick(e) {
  let text = e.target.textContent;
  let container = document.querySelector('.container');
  container.style.backgroundColor = text;
  if (text === "Red") {
    container.style.color = 'white';
  } else {
    container.style.color = 'black';
  }
}

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', onClick);
}