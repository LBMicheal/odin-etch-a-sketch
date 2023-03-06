/* CREATES A GRID OF DIVS */
var grid = document.createElement("div");
grid.className = "grid";
for (var i = 0; i < 16; ++i) {
  var column = document.createElement("div");
  column.className = "column";
  for (var j = 0; j < 16; ++j) {
    var row = document.createElement("div");
    row.className = "row";
    column.appendChild(row);
  }
  grid.appendChild(column);
}
document.body.appendChild(grid);

/* ACTIVATE THE GRID AS THE MOUSE HOVERS OVER IT */
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".row")) {
    e.target.classList.add("trail");
  }
});
