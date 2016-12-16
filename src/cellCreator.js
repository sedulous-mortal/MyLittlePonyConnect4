let takeTurn = () => {
    if (currentPlayer == players[0]) {
        $(target).innerHTML = '<p>P1</p>';
    } else if (currentPlayer == players[1]) {
        $(target).innerHTML = '<p>P2</p>';
    }
    winCheck();
};

let cellCreator = () => {
    //assign row and column classes
    for (let j = 1; j < 43; j++) {
        let newCell = new Cell(j);
        $(newCell.skinCell(j)).appendTo('body');
        //why is it telling me addEventListener isnt a function?
        newCell.skinCell(j).addEventListener('click', function () {
            takeTurn();
        });
        //assign column classes
        if (j % 7 == 0) {
            $('#j').addClass('col1');
        } else if (j % 7 == 1) {
            $('#j').addClass('col2');
        } else if (j % 7 == 2) {
            $('#j').addClass('col3');
        } else if (j % 7 == 3) {
            $('#j').addClass('col4');
        } else if (j % 7 == 4) {
            $('#j').addClass('col5');
        } else if (j % 7 == 5) {
            $('#j').addClass('col6');
        }
        //add row classes
        if (0 < j < 8) {
            $('#j').addClass('row1');
        } else if (8 < j < 15) {
            $('#j').addClass('row2');
        } else if (15 < j < 22) {
            $('#j').addClass('row3');
        } else if (22 < j < 29) {
            $('#j').addClass('row4');
        } else if (29 < j < 36) {
            $('#j').addClass('row5');
        } else if (36 < j < 43) {
            $('#j').addClass('row6');
        }
        // add more if statements here for rows up to 10 in fancy version
    } //end j for loop
};
