const sameXOAmount = require('./sameXOAmount');

test('should return `true` if number of `X` and `O` is equal', () => {
  expect(sameXOAmount('xXoO')).toEqual(true);
  expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
  expect(sameXOAmount('abc')).toEqual(true);
});


test('should return `false` if number of `X` and `O` is not equal', () => {
  expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
  expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
  expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
});