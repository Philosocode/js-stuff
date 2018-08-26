function palindrome(str) {
  const reversedStr = str
    .split('')
    .reverse()
    .join('');

  return str === reversedStr;
}

function palindrome(str) {
  const strLength = str.length;

  for (let counter = 0; counter < strLength / 2; counter++) {
    if (str[counter] !== str[strLength - 1 - counter]) {
      return false;
    }
  }

  return true;
}

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
