const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const transposedArr = transpose(letters);
  const verticalJoin = transposedArr.map(ls => ls.join(''));

  for (let v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};

// tranpose function taken from pair programming partner's prior exercise
const transpose = function(matrix) {
  let results = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let array1 = [];
    for (let j = 0; j < matrix.length; j++) {
      array1.push(matrix[j][i]);
    }
    results.push(array1);
  }
  return results;
};

module.exports = wordSearch;