/* CREATES A GRID OF DIVS */
var numberOfColumns = 16;
var numberOfRows = 16;
const resetButton = document.querySelector(".resetButton");

var grid = document.createElement("div");
grid.className = "grid";
createGrid();

function createGrid() {
  for (var i = 0; i < numberOfColumns; ++i) {
    var column = document.createElement("div");
    column.className = "column";
    for (var j = 0; j < numberOfRows; ++j) {
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
  let number = prompt("Please enter number of squares per side? (up to 100)");
  numberOfColumns = number;
  numberOfRows = number;

  createGrid();
}
