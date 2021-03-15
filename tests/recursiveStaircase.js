const recursiveStaircase = (n) => {
  if (n === 0 || n === 1) return 1;
  return recursiveStaircase(n - 1) + recursiveStaircase(n - 2);
};

module.exports = recursiveStaircase;