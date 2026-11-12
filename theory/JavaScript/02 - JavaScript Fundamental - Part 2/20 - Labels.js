outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1) break outer;
    console.log(i, j);
  }
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer;
    console.log(i, j);
  }
}

/*

❌ Where labels should NOT be used
JS allows labeling any statement, but doing things like this is considered bad practice:


⭐ When should you use labels?
Use labels only when:
You have nested loops
Normal break and continue cannot do what you need
You want to avoid setting extra flags or rewriting the loops

*/

const mapGrid = [
  ["grass", "grass", "grass"],
  ["grass", "player", "grass"],
  ["grass", "grass", "grass"],
];

let found = false;
let position = null;

search: for (let row = 0; row < mapGrid.length; row++) {
  for (let col = 0; col < mapGrid[row].length; col++) {
    if (mapGrid[row][col] === "player") {
      position = { row, col };
      found = true;
      break search; // ← break out of BOTH loops
    }
  }
}

console.log("Found:", found); // true
console.log("Player at:", position); // { row: 1, col: 1 }
