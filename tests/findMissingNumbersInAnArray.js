const findMissingNumbersInAnArray = (arr) => {
  var result = [];
  var allNumbers = Math.max.apply(Math, arr);
  //var allNumbers = Math.max(...arr);

  for (var i = 0; i < allNumbers; i++) {
    if (arr.indexOf(i) < 0) {
      result.push(i);
    }
  }

  return result;
}

module.exports = findMissingNumbersInAnArray;
