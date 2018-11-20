let cells = [];
let player_1 = [];
let player_2 = [];
let turnsRemaining;

$("button").on("click", function() {
  let fieldSize = $(this).attr("id");
  $(".choose_game").remove();
  creatField(fieldSize);
});

function Cell(id) {
  this.id = id;
  this.checked = false;
}

function creatField(fieldSize) {
  //create game field with class game
  let gameField = $("<div>");
  gameField.attr("class", "game");

  //how many cells in the field
  let size = 0;
  if (fieldSize === "3x3") {
    size = 9;
  } else if (fieldSize === "4x4") {
    size = 16;
  } else if (fieldSize === "5x5") {
    size = 25;
  }

  //create cells
  for (let i = 1; i <= size; i++) {
    let div = $("<div>");
    div.attr("class", "cell");
    div.attr("id", "cell_" + i);
    gameField.append(div);

    let cell = new Cell;
    cell.id = "cell_" + i;
    cells.push(cell);
  }

  //atach game field to the body
  $("body").append(gameField);

  let link = $("<link>");
  link.attr("rel", "stylesheet");
  link.attr("href", fieldSize + ".css");
  $("head").append(link);

  turnsRemaining = size;
  startGame(size)
}

function startGame() {
  let currentPlayer = true;

  $(".cell").on("click", function(e) {
    for (let cell of cells) {
      if (this.id === cell.id && !cell.checked && turnsRemaining > 0) {
        cell.checked = true;
        if (currentPlayer) {
          $(this).text("X");
          player_1.push($(this).attr("id"));
          currentPlayer = !currentPlayer;
          console.log(player_1);
        } else if (!currentPlayer) {
          $(this).text("O");
          player_2.push($(this).attr("id"));
          currentPlayer = !currentPlayer;
        }
        turnsRemaining--;
      }

      if (turnsRemaining === 0) {
        alert("Oavgjort!");
      }
    }
  });
}