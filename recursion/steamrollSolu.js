function steamroll1(arr) {
  var flattenedArray = [];

  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  arr.forEach(flatten);

  return flattenedArray;
}

steamroll1([1, 2, 3]);

/* ======================================================================== */

function steamrollArray(arr) {
  const flat = [].concat(...arr);

  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}


steamrollArray([1, [2]]);
