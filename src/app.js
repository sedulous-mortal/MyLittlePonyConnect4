"use strict";
//add a ready function here

/*fancy stuff
let numSQ = prompt("How many squares? (Must be divisible by 7!)");
while (numSQ % 7 != 0) {
    numSQ = prompt("Sorry, your board must have 7 columns. Enter a number divisible by 7.");
};
alert(`Great, I'll make a board with ${numSQ} squares!`);
*/
let numSQ = 42;
//create all the cells
cellCreator();
console.log($('#board'));
