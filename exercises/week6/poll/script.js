let body = document.body;
let header = document.createElement("h1");
let question = document.createElement("p");

let allQuestion = ["This", "is", "only", "test"];
let allAnswers = [];
let quesNum = 0;

header.textContent = "Question " + (quesNum + 1);
question.textContent = allQuestion[0];

body.appendChild(header);
body.appendChild(question);

for (let i = 1; i <= 6; i++) {
  let input = document.createElement("input");
  let label = document.createElement("label");

  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("nr", i);
  input.addEventListener("click", onClick);
  label.textContent = i;

  body.appendChild(input);
  body.appendChild(label);
}

function onClick(e) {
  let answer = e.target;
  allAnswers.push(answer.getAttribute("nr"));
  if (quesNum + 1 === allQuestion.length) {
    clearBody();
    showAnswers();
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  quesNum++;
  header.textContent = "Question " + (quesNum + 1);
  question.textContent = allQuestion[quesNum];
}

function clearBody() {
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

function showAnswers() {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 0; i < allQuestion.length; i++) {
    let tr = tbody.insertRow();
    let cell_1 = tr.insertCell();
    let cell_2 = tr.insertCell();

    cell_1.style.paddingRight = "20px";

    cell_1.textContent = allQuestion[i];
    cell_2.textContent = allAnswers[i];
  }
  table.appendChild(tbody);
  body.appendChild(table);
}