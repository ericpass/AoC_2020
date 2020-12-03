/*
Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.
*/

const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n');

const validPasswords = input.filter(data => {
  const splitData = data.split(' ');

  // Get min/max occurrences
  const numTries = splitData[0].split('-');

  const minOccurrences = numTries[0];
  const maxOccurrences = numTries[1];

  // Get target password letter
  const targetLetter = splitData[1][0];

  // Get actual password
  const password = splitData[2];
  
  // Create empty hash map for target letter
  const targetHash = {};

  password.split('').forEach(letter => {
    if (targetHash.hasOwnProperty(letter)) {
      targetHash[letter] += 1;
    }

    else {
      targetHash[letter] = 1;
    }
  });

  return targetHash[targetLetter] >= minOccurrences && targetHash[targetLetter] <= maxOccurrences;
});

console.log(validPasswords.length);

// Correct answer: 418