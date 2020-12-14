/*
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

const fs = require('fs');

const target = 2020;

const input = fs.readFileSync('./input.txt').toString().split('\n');

const newArray = input.map(num => {
  return parseInt(num);
});

const threeSum = nums => {

  // Sort the array for faster indexing
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i];
    let b, c;
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      b = nums[start];
      c = nums[end];

      if ((a + b + c) === target) return [a, b, c];

      else if ((a + b + c) > target) {
        end = end - 1;
      }

      else {
        start = start + 1;
      }
    };
  };
};

const result = threeSum(newArray);

const finalAnswer = result.reduce((a, b) => {
  return a * b;
});

console.log(finalAnswer);

// Correct answer 193416912