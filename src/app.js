"use strict";
//add a ready function here


let numSQ = prompt("How many squares? (Must be divisible by 7!)");
while (numSQ % 7 != 0) {
    numSQ = prompt("Sorry, your board must have 7 columns. Enter a number divisible by 7.");
};
alert(`Great, I'll make a board with ${numSQ} squares!`);

//board-generator function
const boardGenerator = () => {
    //define the board
    let boardDiv = $('<div \>', {
        id: 'board'
    });
    for (let j = 0; j < numSQ; j++) {
        let myCell = new Cell(j);
        if (0 < j < 7) {
            $('myCell').addClass('row1');
        } else if (7 < j < 14) {
            $('myCell').addClass('row2');
        } else if (14 < j < 21) {
            $('myCell').addClass('row3');
        } else if (21 < j < 28) {
            $('myCell').addClass('row4');
        } else if (28 < j < 35) {
            $('myCell').addClass('row5');
        } else if (35 < j < 42) {
            $('myCell').addClass('row6');
        }
        //consider adding more if statements here for rows up to 10 in fancy version
        console.log('my cell is' + myCell);
    } //end for loop
}; //end board Generator

boardGenerator();
console.log($('#board'));
