/* CREATES A GRID OF DIVS */
var squares = 16;
const resetButton = document.querySelector(".resetButton");

var grid = document.createElement("div");
grid.className = "grid";
createGrid();

function createGrid() {
  for (var i = 0; i < squares; ++i) {
    var column = document.createElement("div");
    column.className = "column";
    for (var j = 0; j < squares; ++j) {
      var row = document.createElement("div");
      row.className = "row";
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  document.body.appendChild(grid);
}

/* ACTIVATE THE GRID AS THE MOUSE HOVERS OVER IT */
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".row")) {
    e.target.classList.add("trail");
  }
});

/* BUTTON FOR RESETTING GRID  */
resetButton.addEventListener("click", gridReset);

/* FUNCTION FOR RESETTING GRID */
function gridReset() {
  do {
    var selection = parseInt(
      window.prompt("Please enter a number from 1 to 100", ""),
      10
    );
  } while (isNaN(selection) || selection > 100 || selection < 1);
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  squares = selection;

  createGrid();
}
