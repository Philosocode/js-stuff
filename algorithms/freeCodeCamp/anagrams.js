function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// ====================================
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// ================================================================
function anagrams(stringA, stringB) {
  const aCleanedStr = lowerCaseAndRemovePunctuation(stringA);
  const bCleanedStr = lowerCaseAndRemovePunctuation(stringB);

  let aArr = makeArrFromStr(aCleanedStr);
  let bArr = makeArrFromStr(bCleanedStr);

  return arraysAreEqual(aArr, bArr);
}

function lowerCaseAndRemovePunctuation(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function makeArrFromStr(str) {
  const temp = [];
  for (let char of str) {
    temp.push(char);
  }

  return temp.sort();
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// ========================================================
function anagrams(stringA, stringB) {
  let objectA = stringToObject(stringA);
  let objectB = stringToObject(stringB);

  return checkObjectEquality(objectA, objectB);
}

function stringToObject(string) {
  // So I want to iterate through each letter
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  string = string.toLowerCase();
  let charMap = {};

  for (let letter of string) {
    if (alphabet.includes(letter)) {
      charMap[letter] = charMap[letter] + 1 || 1;
    }
  }

  return charMap;
}

function checkObjectEquality(objA, objB) {
  for (let key in objA) {
    if (!objB.hasOwnProperty(key)) {
      return false;
    }

    if (objA[key] != objB[key]) {
      return false;
    }
  }

  for (let key in objB) {
    if (!objA.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

