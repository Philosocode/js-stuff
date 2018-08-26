function chunk(array, size) {
  let chunkArr = [];
  let finalArr = [];

  array.forEach(function(num) {
    if (chunkArr.length < size) {
      chunkArr.push(num);
    } else {
      finalArr.push(chunkArr);
      chunkArr = [];
      chunkArr.push(num);
    }
  });

  finalArr.push(chunkArr);

  return finalArr;

}

function chunk(array, size) {
  // chunked will store the entire chunked array
  const chunked = [];

  // Iterate through all elements of array
  for (let element of array) {
    // "last" is the last element in the final chunked array
    const last = chunked[chunked.length - 1];

    // If there is no last element, or the chunk is complete (length === size)
    if (!last || last.length === size) {
      // Push the element into chunked
      chunked.push([element]);
    } else {
      // If there is an incomplete chunk, push the element into the chunk
      last.push(element);
    }
  }

  // Return the final, chunked array
  return chunked;
}

function chunk(array, size) {
  const chunkArr = [];
  let index = 0;

  while (index < array.length) {
    chunkArr.push(array.slice(index, index + size));
    index += size;
  }

  return chunkArr;

}

