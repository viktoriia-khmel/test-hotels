"use strict";

function makeTable(n) {
  let header = "  ";
  for (let i = 1; i <= n; i++) {
    header += `${i.toString().padStart(4, " ")}`;
  }
  console.log(header);

  for (let i = 1; i <= n; i++) {
    let row = `${i.toString().padStart(2, " ")}`;
    for (let a = 1; a <= n; a++) {
      row += `${(i * a).toString().padStart(4, " ")}`;
    }
    console.log(row);
  }
}

makeTable(12);
