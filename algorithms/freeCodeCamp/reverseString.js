function reverseStr(str) {
  return str.split('')
    .reverse()
    .join('');
}

function reverseStr(str) {
  return str
    .split('')
    .reduce((prev, letter) => letter + prev, '');
}

function rreverseStr(str) {
  if str.length == 0 {
    return "";
  } else {
    return rreverseStr(str.substr(1)) + str.charAt(0);
  }
}
