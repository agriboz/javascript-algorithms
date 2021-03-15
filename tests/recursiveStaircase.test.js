const { recursiveStaircase, numWaysBottomUp } = require('./recursiveStaircase');

test('should return number of ways to be 5', () => {
  expect(recursiveStaircase(4)).toBe(5);
});

test('should return number of ways to be 5', () => {
  expect(numWaysBottomUp(4)).toBe(5);
});