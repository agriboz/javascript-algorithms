const recursiveStaircase = (n) => {
  if (n === 0 || n === 1) return 1;
  return recursiveStaircase(n - 1) + recursiveStaircase(n - 2);
};


const numWaysBottomUp = (n) => {
  if (n === 0 || n === 1) return 1;
  nums = n + 1;
  nums[0] = 1;
  nums[1] = 1;
  let range = (start, end) => Array.from(Array(end + 1).keys()).slice(start);

  for (var i of range(2, n)) {
    nums[i] = nums[i - 1] + nums[i - 2]
    return nums;
  }
  return nums[n];
};

module.exports = { recursiveStaircase, numWaysBottomUp };