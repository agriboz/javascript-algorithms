const R = require('ramda');

const findDuplicateItems = (arr) => {
  const result = R.compose(R.map(R.length), R.groupBy(R.identity))
  return result(arr);
}

const findDuplicateItems2 = (numbers) => {
  const result = []
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        result.push(numbers[i])
      }
    }
  }
  return result

}

module.exports = {
  findDuplicateItems, findDuplicateItems2
}
