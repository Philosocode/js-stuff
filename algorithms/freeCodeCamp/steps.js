function steps(n) {
  const stepArr = [];

  for (let i = 0; i < n; i++) {
    stepArr.push(" ");
  }

  let index = 0;
  while (index < n) {
    stepArr[index] = "#";
    console.log(stepArr.join(''));
    index++;
  }
}

function steps(n) {
  // If n = 4, we have 4 rows
  for (let row = 0; row < n; row++) {
    // Each stair will be built upon an empty STR
    let stair = '';

    // We're building an "n x n" grid
    for (let col = 0; col < n; col ++) {
      // Row 1 should only have 1 col
      // Row 2 should have 2 cols filled, etc
      if (col <= row) {
        stair += "#";
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}


