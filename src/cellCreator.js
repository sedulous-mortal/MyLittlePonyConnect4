let players = ['rainbowDash', 'flutterShy'];
let currentPlayer = players[0];

let takeTurn = (e) => {
    let target = e.target;
    console.log(e.target);
    if (currentPlayer == 'rainbowDash') {
        (e.target).innerHTML = 'DASH';
        currentPlayer = players[1];
    } else if (currentPlayer == players[1]) {
        (e.target).innerHTML = 'SHY';
        currentPlayer = players[0];
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
};
