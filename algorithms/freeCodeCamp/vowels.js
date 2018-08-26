function vowels(str) {
  const alphabet = "aeiou";
  str = str.toLowerCase();

  let count = Array
    .from(str)
    .reduce((acc, char) => (alphabet.includes(char) ? acc += 1 : acc), 0);

  return count;
}

function vowels(str, count = 0) {
  if (!str) {
    return count;
  }

  const alpha = "aeiouAEIOU";

  if (alpha.includes(str[0])) {
    return vowels(str.slice(1), count += 1);
  } else {
    return vowels(str.slice(1), count);
  }
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
