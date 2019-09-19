// import { findDuplicateItems, findDuplicateItems2 } from './findDuplicateItems'
const { findDuplicateItems, findDuplicateItems2 } = require('./findDuplicateItems');
test('it should smth', () => {
  const items = [
    "javascript",
    "javascript",
    "clojure",
    "clojure",
    "clojure",
    "java",
    "kotlin",
    "kotlin",
  ];

  const expected = { javascript: 2, clojure: 3, java: 1, kotlin: 2 };
  const received = findDuplicateItems(items);

  expect(received).toEqual(expected);
});


test('it should find duplicated numbers in an given array', () => {
  const numbers = [
    1,1,2,2,3,4,4
  ];

  const expected = [1, 2, 4]
  const received = findDuplicateItems2(numbers);

  expect(received).toEqual(expected);
});
