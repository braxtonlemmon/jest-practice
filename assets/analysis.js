function average(array) {
  const sum = array.reduce((prev, cur) => prev + cur, 0);
  return sum / array.length;
}

function min(array) {
  let min = array[0] || null;
  array.forEach(num => num < min ? min = num : null);
  return min;
}

function max(array) {
  let max = array[0] || null;
  array.forEach(num => num > max ? max = num : null);
  return max;
}

function length(array) {
  let count = 0;
  array.forEach(() => count += 1);
  return count;
}

function analyze(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  }
}

export { analyze };