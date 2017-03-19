const sameXOAmount = (str) => {
  const countx = (str.match(/x/gi) || '').length;
  const counto = (str.match(/o/gi) || '').length;

  return countx === counto ? true : false;

};


module.exports = sameXOAmount;