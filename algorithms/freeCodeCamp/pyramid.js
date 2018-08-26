/* ===========
   SOLUTION 1
   =========== */
function pyramid(max, current = 1) {
  if (current > max) {
    return;
  }

  const hashString = buildHashString(max, current);
  const spaceString = buildSpaceString(max, current);

  const leftHalf = spaceString + hashString;
  const rightHalf = hashString + spaceString;
  const pyramidString = leftHalf + "#" + rightHalf;
  console.log(pyramidString);

  return pyramid(max, current + 1);
}

function buildHashString(max, current) {
  const numOfHashes = current - 1;

  if (numOfHashes === 0) {
    return '';
  }

  let hashString = '';
  for (let i = 1; i <= numOfHashes; i++) {
    hashString += '#';
  }
  return hashString;
}

function buildSpaceString(max, current) {
  const numOfSpaces = max - current;
  if (numOfSpaces === 0) {
    return "";
  }

  let spaceStr = '';
  for (let i = 0; i < numOfSpaces; i++) {
    spaceStr += ' ';
  }
  return spaceStr;
}

/* ===========
   SOLUTION 2
   =========== */
function pyramid(n) { // example: n = 4
  // midpoint = (4 * 2 - 1) / 2
  // so the midpoint is 3 (the 4th el)
  // remember, num of cols = 7: [0, 1, 2, *3*, 4, 5, 6]
  const midpoint = Math.floor((2 * n - 1) / 2);

  // rows: [0, 1, 2, 3]
  for (let row = 0; row < n; row ++) {
    // create a string to store each row
    let level = "";

    // num of cols: (4 * 2) - 1
    // so we're going through all 7 columns [0, 1, 2, 3, 4, 5, 6]
    for (let col = 0; col < 2 * n - 1; col++) {
    // row: 0, midpoint: 3
    // if midpoint - row <= col AND midpoint + row >= col, add a hash.
      // col 0: add a space
      // col 1: add a space
      // col 2: add a space
      // col 3: 3 <= 3, 3 >= 3; add a hash
      // col 4: add a space
      // col 5: add a space
      // col 6: add a space
    // if midpoint - row <= col AND midpoint + row >= col, add a hash.
    // row: 1, midpoint: 3; midpoint - row = 2, midpoint + row = 4
    // row: 2, midpoint: 3; midpoint - row = 1, midpoint + row = 5
    // row: 3, midpoint: 3; midpoint - row = 0, midpoint + row = 6
      // col 0: add a hash (midpoint - row <= col; midpoint + row > col)
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

/* ===========
   SOLUTION 3
   =========== */
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  return pyramid(n, row, level + add);
}
