const findDuplicateItems = require('./findDuplicateItems');

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
