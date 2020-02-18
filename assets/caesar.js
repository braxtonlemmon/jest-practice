const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function getIndex(char) {
  return letters.indexOf(char.toLowerCase());
}

function isLetter(char) {
  return letters.includes(char.toLowerCase()) ? true : false;
}

function shift(char, key) {
  return letters[(getIndex(char) + key) % 26];
}

function caesarCipher(string, key) {
  return string.split('').map(char => {
    if (!isLetter(char)) return char;
    return char === char.toUpperCase() ? shift(char, key).toUpperCase() : shift(char, key);
  }).join('');

}

export { caesarCipher };