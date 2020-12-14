/**
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
 */

const fs = require('fs');

const target = 2020;

const input = fs.readFileSync('./input.txt').toString().split('\n');

const twoSum = (nums, target) => {
  let numObject = {};

  for (let i = 0; i < nums.length; i++) {
    let thisNum = parseInt(nums[i]);
    numObject[thisNum] = i;
  };

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [nums[i], diff];
    }
  };
};

const findFinalAnswer = nums => {
  return nums[0] * nums[1];
};

const sumNums = twoSum(input, target);
const finalAnswer = findFinalAnswer(sumNums)
console.log(finalAnswer);

// Correct answer 41979