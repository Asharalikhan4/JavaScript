const board = [["", "", ""], ["", "", ""], ["", "", ""]];
const options = document.querySelectorAll("[name='player-option']");
const rows = document.querySelectorAll(".row");
const result = document.querySelectorAll(".result");
let ai = "O", human = "X";
rows.forEach((e) => {
  const span = e.children[0].children[0];
  e.addEventListener("click", (f) => {
    // Get which grid is clicked.
    const dataRow = +e.getAttribute("data-row");
    const dataColumn = +e.getAttribute("data-column");
    
    // if the grid is not marked
    if (board[dataRow][dataColumn] === "") {
      // Player move
      span.innerHTML = human;
      board[dataRow][dataColumn] = human;
    }
  })
})


console.log(options, rows, result);