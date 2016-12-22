let players = ['rainbowDash', 'flutterShy'];
let currentPlayer = players[0];

let fillMe = (cell) => {
    if (currentPlayer == 'rainbowDash') {
        cell.innerHTML = '<img class="piece" src="assets/DASH.png" \>';
        currentPlayer = players[1];
    } else if (currentPlayer == players[1]) {
        cell.innerHTML = '<img class="piece" src="assets/SHY.png" \>';
        currentPlayer = players[0];
    }
}

let takeTurn = (e) => {
    let target = e.target;
    console.log("this is the event target:", e.target);
    let myID = e.target.getAttribute('id');
    let botRow = Number(myID) + 35;
    if ($(`#${botRow}`).hasClass('clear') === false) {
        console.log(true);
        //why is this if statement never logging to console
        //or evaluating to true?
        if (botRow <= numSQ && $(`#${botRow}`).hasClass('clear') === false) {
            //something about this part is wonky:

        }
        if ($(`#${botRow}`).hasClass('clear')) {
            $(`#${botRow}`).removeClass('clear');
            fillMe($('div').get(botRow));
        } else if ($(`#${botRow-7}`).hasClass('clear')) {
            $(`#${botRow-7}`).removeClass('clear');
            fillMe($('div').get(botRow - 7));
        } else if ($(`#${botRow-14}`).hasClass('clear')) {
            $(`#${botRow-14}`).removeClass('clear');
            fillMe($('div').get(botRow - 14));
        } else if ($(`#${botRow-21}`).hasClass('clear')) {
            $(`#${botRow-21}`).removeClass('clear');
            fillMe($('div').get(botRow - 21));
        } else if ($(`#${botRow-28}`).hasClass('clear')) {
            $(`#${botRow-28}`).removeClass('clear');
            fillMe($('div').get(botRow - 28));
        } else if ($(`#${botRow-35}`).hasClass('clear')) {
            $(`#${botRow-35}`).removeClass('clear');
            fillMe($('div').get(botRow - 35));
        }
        //I don't know why I can't get the last column to behave as the others do.
        //else {
        //            let botRow = Number(myID) + 35;
        //
        //            if ($(`#${botRow}`).hasClass('clear')) {
        //                $(`#${botRow}`).removeClass('clear');
        //                fillMe($('div').get(botRow));
        //            } else if ($(`#${botRow-7}`).hasClass('clear')) {
        //                $(`#${botRow-7}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 7));
        //            } else if ($(`#${botRow-14}`).hasClass('clear')) {
        //                $(`#${botRow-14}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 14));
        //            } else if ($(`#${botRow-21}`).hasClass('clear')) {
        //                $(`#${botRow-21}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 21));
        //            } else if ($(`#${botRow-28}`).hasClass('clear')) {
        //                $(`#${botRow-28}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 28));
        //            } else if ($(`#${botRow-35}`).hasClass('clear')) {
        //                $(`#${botRow-35}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 35));
        //            } else if ($(`#${botRow-42}`).hasClass('clear')) {
        //                $(`#${botRow-42}`).removeClass('clear');
        //                fillMe($('div').get(botRow - 42));
        //            }
        //        }
    }
    winCheck();
};

let cellCreator = () => {
    //assign row and column classes
    for (let j = 1; j < 43; j++) {
        let newCell = new Cell(j);
        $(newCell.skinCell(j)).appendTo($('#board'));
        //onclick handler for all cells
        $(`#${j}`).on('click', function (e) {
            takeTurn(e);
        });
        //assign a clear class to help with on-click fills
        $(`#${j}`).addClass('clear');
        //assign column classes
        if (j % 7 == 1) {
            $(`#${j}`).addClass('col1');
        }
        if (j % 7 == 2) {
            $(`#${j}`).addClass('col2');
        }
        if (j % 7 == 3) {
            $(`#${j}`).addClass('col3');
        }
        if (j % 7 == 4) {
            $(`#${j}`).addClass('col4');
        }
        if (j % 7 == 5) {
            $(`#${j}`).addClass('col5');
        }
        if (j % 7 == 6) {
            $(`#${j}`).addClass('col6');
        }
        if (j % 7 == 0) {
            $(`#${j}`).addClass('col7');
        }

        //add row classes
        if (j > 0 && j < 8) {
            $(`#${j}`).addClass('row1');
        }
        if (j >= 8 && j < 15) {
            $(`#${j}`).addClass('row2');
        }
        if (j >= 15 && j < 22) {
            $(`#${j}`).addClass('row3');
        }
        if (j >= 22 && j < 29) {
            $(`#${j}`).addClass('row4');
        }
        if (j >= 29 && j < 36) {
            $(`#${j}`).addClass('row5');
        }
        if (j >= 36 && j < 43) {
            $(`#${j}`).addClass('row6');
        }
        // add more if statements here for rows up to 10 in fancy version
    } //end j for loop
}; //end cell creator function
