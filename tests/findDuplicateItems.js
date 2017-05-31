const R = require('ramda');

const findDuplicateItems = (arr) => {
  const result = R.compose(R.map(R.length), R.groupBy(R.identity))
  return result(arr);
}

module.exports = findDuplicateItems;
