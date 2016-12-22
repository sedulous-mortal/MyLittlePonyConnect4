let winCount = 0;
//check for winstate
//gets called at end of takeTurn method on Player object (whichever is stored in currentPlayer)

let winCheck = () => {
    //nested for loop to check every possible state
    //for the number of columns
    for (let n = 1; n <= (numSQ / 6); n++) {
        //I can't say divs = $('div') because board is a div and throws the count off by 1
        let divs = $('div div');
        for (div of divs) {

            if ($('div').hasClass(`col${n} row${n}`) == true && ($('div').hasClass('clear') == false)) {
                //check for down diagonals
                if ($(`div`).hasClass(`col${n} row${n}`).innerHTML == $('div').hasClass(`col${n+1} row${n+1}`).innerHTML &&
                    $('div').hasClass(`col${n+1} row${n+1}`).innerHTML == $('div').hasClass(`col${n+2} row${n+2}`).innerHTML &&
                    $('div').hasClass(`col${n+2} row${n+2}`).innerHTML == $('div').hasClass(`col${n+3} row${n+3}`)) {
                    alert("A downwards-sloped diagonal has won!");
                    winCount += 1;
                }

                //check for up diagonals
                else if ($('div').innerHTML == $('div').hasClass(`col${n-1} row${n-1}`).innerHTML &&
                    $('div').hasClass(`col${n-1} row${n-1}`).innerHTML == $('div').hasClass(`col${n-2} row${n-2}`).innerHTML &&
                    $('div').hasClass(`col${n-2} row${n-2}`).innerHTML == $('div').hasClass(`col${n-3} row${n-3}`)) {
                    alert("An upward-sloped diagonal has won!");
                    winCount += 1;
                }

                //check for 4 in a row
                else if ($('div').innerHTML == $('div').hasClass(`col${c+1} row{r}`).innerHTML &&
                    $('div').hasClass(`col${n+1} row${n}`).innerHTML == $('div').hasClass(`col${n+2} row${n}`).innerHTML &&
                    $('div').hasClass(`col${n+2} row${n}`).innerHTML == $('div').hasClass(`col${n+3} row${n}`).innerHTML) {
                    alert("Someone has won on a row!");
                    winCount += 1;
                }

                //check for 4 in a column
                else if ($('div').innerHTML == $('div').hasClass(`col${n} row${n+1}`).innerHTML &&
                    $('div').hasClass(`col${n} row${n+1}`).innerHTML == $('div').hasClass(`col${n} row${n+2}`).innerHTML &&
                    $('div').hasClass(`col${n} row${n+2}`).innerHTML == $('div').hasClass(`col${n} row${n+3}`).innerHTML) {
                    alert("Someone has won in a column!");
                    winCount += 1;
                }

                if (winCount == 2) {
                    alert("Someone has won a DOUBLE Connect-4!");
                } else if (winCount == 3) {
                    alert("Someone has won a TRIPLE Connect-4!");
                } else if (winCount == 4) {
                    alert("Someone has won a QUADRUPLE Connect-4!")
                }
            }
        }
    }
};
