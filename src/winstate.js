let winCount = 0;
//check for winstate
//gets called at end of takeTurn method on Player object (whichever is stored in currentPlayer)

let winCheck = () => {
    //nested for loop to check every possible state
    //for the number of columns
    for (let c = 1; c < 8; c++) {
        console.log("Checking for winstate");
        //for the number of rows
        for (let r = 1; r < (numSQ / 7); r++) {
            //while all the cells do not equate to '', do the following:
            while ($('divs').isEmptyObject) {
                //check for down diagonals
                if ($('div').hasClass(`col${c} row${r}`).innerHTML == $('div').hasClass(`col${c+1} row${r+1}`).innerHTML &&
                    $('div').hasClass(`col${c+1} row${r+1}`).innerHTML == $('div').hasClass(`col${c+2} row${r+2}`).innerHTML &&
                    $('div').hasClass(`col${c+2} row${r+2}`).innerHTML == $('div').hasClass(`col${c+3} row${r+3}`)) {
                    alert("A downwards-sloped diagonal has won!");
                    winCount += 1;
                }

                //check for up diagonals
                else if ($('div').hasClass(`col${c} row${r}`).innerHTML == $('div').hasClass(`col${c-1} row${r-1}`).innerHTML &&
                    $('div').hasClass(`col${c-1} row${r-1}`).innerHTML == $('div').hasClass(`col${c-2} row${r-2}`).innerHTML &&
                    $('div').hasClass(`col${c-2} row${r-2}`).innerHTML == $('div').hasClass(`col${c-3} row${r-3}`)) {
                    alert("An upward-sloped diagonal has won!");
                    winCount += 1;
                }

                //check for 4 in a row
                else if ($('div').hasClass(`col${c} row${r}`).innerHTML == $('div').hasClass(`col${c+1} row{r}`).innerHTML &&
                    $('div').hasClass(`col${c+1} row${r}`).innerHTML == $('div').hasClass(`col${c+2} row${r}`).innerHTML &&
                    $('div').hasClass(`col${c+2} row${r}`).innerHTML == $('div').hasClass(`col${c+3} row${r}`).innerHTML) {
                    alert("Someone has won on a row!");
                    winCount += 1;
                }

                //check for 4 in a column
                else if ($('div').hasClass(`col${c} row${r}`).innerHTML == $('div').hasClass(`col${c} row${r+1}`).innerHTML &&
                    $('div').hasClass(`col${c} row${r+1}`).innerHTML == $('div').hasClass(`col${c} row${r+2}`).innerHTML &&
                    $('div').hasClass(`col${c} row${r+2}`).innerHTML == $('div').hasClass(`col${c} row${r+3}`).innerHTML) {
                    alert("Someone has won in a column!");
                    winCount += 1;
                } else if (winCount == 2) {
                    alert("Someone has won a DOUBLE Connect-4!");
                } else if (winCount == 3) {
                    alert("Someone has won a TRIPLE Connect-4!");
                } else if (winCount == 4) {
                    alert("Someone has won a QUADRUPLE Connect-4!")
                }
            } //end rows for loop
        } //end columns for loop
    } //end while loop
};
