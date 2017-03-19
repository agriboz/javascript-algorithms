const sumSmallestNumbers = (array) => {
  if (!array.some(isNaN) && array.length >= 2) {
    const sortedArray = array.sort();
    const min = sortedArray[0];
    const min2 = sortedArray[1];
    return min + min2;
  }
};


module.exports = sumSmallestNumbers;