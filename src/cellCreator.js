let players = ['rainbowDash', 'flutterShy'];
let currentPlayer = players[0];

let takeTurn = (e) => {
    let target = e.target;
    console.log(e.target);
    let myID = e.target.getAttribute('id');
    let botRow = Number(myID) + 35;
    if (botRow <= numSQ) {
        if ($(`#${botRow}`).innerHTML == undefined) {
            alert('I am empty!');
            //neither of these two work at targeting the desired div:
            //$('<div>').has('id', `${botRow}`).innerHTML = "O";
            //$(`#botRow`).innerHTML = "O";
            ($('div').get(botRow).innerHTML = "O");
        }
    } else if (botRow <= (numSQ - 7)) {
        if ($(`#${botRow}`).innerHTML == undefined) {
            ($('div').get(botRow - 7).innerHTML = "O");
        }
    }
    //$(`#${$('e.target').attr('id')}`))

    //    if (currentPlayer == 'rainbowDash') {
    //        (e.target).innerHTML = '<img class="piece" src="assets/DASH.png" \>';
    //        currentPlayer = players[1];
    //    } else if (currentPlayer == players[1]) {
    //        (e.target).innerHTML = '<img class="piece" src="assets/SHY.png" \>';
    //        currentPlayer = players[0];
    //    }
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
