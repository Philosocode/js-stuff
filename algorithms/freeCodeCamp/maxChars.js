function maxChar(str) {
  const maxObj = {};
  const strArr = str.split('');

  strArr.forEach(function(char) {
    if (maxObj.hasOwnProperty(char)) {
      maxObj[char] += 1;
    } else {
      maxObj[char] = 1;
    }
  });

  let savedKey;
  let highestNum = 0;

  for (let key of Object.keys(maxObj)) {
    if (maxObj[key] > highestNum) {
      highestNum = maxObj[key];
      savedKey = key;
    }
  }

  return savedKey;
}

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  }

  let max = 0;
  let maxChar = "";

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;

}

maxChar("apple 1231111");

