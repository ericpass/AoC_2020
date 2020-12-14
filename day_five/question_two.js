/**
--- Part Two ---
Ding! The "fasten seat belt" signs have turned on. Time to find your seat.

It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

What is the ID of your seat?
 */

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const calcSeatId = seat => {
    let maxRow = 127;
    let minRow = 0;
    let maxCol = 7;
    let minCol = 0;
    let targetRow, targetCol;
    const row = seat.substring(0, 7);
    const col = seat.substring(7, 10);


    for (let i = 0; i < row.length; i++) {
        let sum = maxRow + minRow;

        if (row[i] === 'B') {
            if (maxRow - minRow === 1) {
                targetRow = maxRow;
            } else {
                minRow = Math.ceil(sum/2);
            }
        } else {
            if (maxRow - minRow === 1) {
                targetRow = minRow;
            } else {
                maxRow = Math.floor(sum/2);
            }
        }
    };

    for (let i = 0; i < col.length; i++) {
        let sum = maxCol + minCol;

        if (col[i] === 'R') {
            if (maxCol - minCol === 1) {
                targetCol = maxCol;
            } else {
                minCol = Math.ceil(sum/2);
            }
        } else {
            if (maxCol - minCol === 1) {
                targetCol = minCol;
            } else {
                maxCol = Math.floor(sum/2);
            }
        }
    };

    return ((targetRow * 8) + targetCol);
};

const findSeatId = seats => {
    let targetSeatId = 0;
    const seatMap = new Map();

    seats.forEach(seat => {
        const seatId = calcSeatId(seat);
        seatMap.set(seatId, seat);
    });

    for (let i = 0; i < seats.length; i++) {
        if (seatMap.has(i) === false) {
            targetSeatId = i;
        }
    };

    return targetSeatId;
};

const seatId = findSeatId(input);
console.log(seatId);

// Correct answer 587