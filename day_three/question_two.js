/*
Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered on each of the listed slopes?
*/

const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n');

const countNumTreesEncountered = input => {
  let totals = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0
  };

  let indices = {
    A: [0, 0],
    B: [0, 0],
    C: [0, 0],
    D: [0, 0],
    E: [0, 0]
  };

  const slopes = {
    A: [1, 1],
    B: [3, 1],
    C: [5, 1],
    D: [7, 1],
    E: [1, 2]
  }

  let currentRowNum = 0;
  let totalProduct = 1;

  input.forEach(row => {
    for (const index in indices) {
      if (row[indices[index][0]] === '#' && indices[index][1] === currentRowNum) {
        totals[index]++;
      }

      if ((indices[index][0] + slopes[index][0]) > (row.length - 1)) {
        indices[index][0] = indices[index][0] - row.length + slopes[index][0];
      } else {
        indices[index][0] += slopes[index][0];
      }

      if (indices[index][1] === currentRowNum) {
        indices[index][1] += slopes[index][1];
      }
    };

    currentRowNum++;
  });

  for (total in totals) {
    totalProduct *= totals[total];
  };

  return totalProduct;
};

const result = countNumTreesEncountered(input);
console.log(result);

// Correct answer: 5774564250