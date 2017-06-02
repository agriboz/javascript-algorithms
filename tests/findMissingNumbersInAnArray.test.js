const findMissingNumbersInAnArray = require('./findMissingNumbersInAnArray');

test('it should find missing numbers in an array', () => {
  const numbers = [10,2,4,6,0,9];
  const expected = [1,3,5,7,8];

  const received = findMissingNumbersInAnArray(numbers);

  expect(received).toEqual(expected);
});
