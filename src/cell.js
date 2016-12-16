//tried it this way but it didn't work out
//class Cell extends HTMLDivElement {
//constructor(j) {
//super();
//} //end constructor
//put any methods for cells here
//The behavior you define in createdCB occurs when the element is registered.
//    createdCallback() {
//        this.id = j;
//    }
//} //end cell class
class Cell {
    constructor(j) {
        this.id = j;
        this.class = 'cell';
    }

    skinCell() {
        return $('<div \>').attr('id', this.id).attr('class', this.class);
    }
}
