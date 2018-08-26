function steamrollArray(arr, finalArr = []) {
  if (arr.length == 0) {
    console.log("Empty ARR");
    console.log("Final ARR", finalArr);
    return finalArr;
  }

  // If the first EL is like this: 2
  if (!(Array.isArray(arr[0]))) {
    let temp = arr.shift();
    finalArr.push(temp);
    return steamrollArray(arr, finalArr);
  }

  if (arr[0].length === 0) {
    console.log("Empty?", arr[0]);
    arr.shift();
    return steamrollArray(arr, finalArr);
  }

  // If the first EL is like this: [2]
  if (arr[0].length === 1) {
    let firstEl = arr.shift();
    let comboArr = firstEl.concat(arr);
    return steamrollArray(comboArr, finalArr);
  }

  // If the first EL is like this: [3, [4]]
  if (arr[0].length > 1) {
    return steamrollArray(arr[0], finalArr);
  }

}

steamrollArray([1, [2], [3, [[4]]]]);

// Check if ARR: Array.isArray(var)
