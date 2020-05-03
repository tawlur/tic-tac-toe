//  constants

const playerLookup = {
    '1': 'purple',
    '-1': 'lime',
    'null': 'transparent'
};
/*----- app's state (variables) -----*/
let board;  //Array of column arrays with 1, -1, or null
let turn; // 1 or -1 player
let winner; // 1 = player 1 // -1 = player 2 //  T = tie  // null = no winner/tie

/*----- cached element references -----*/
const markerEls = Array.from(document.querySelectorAll("#board > div"));


/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);


/*----- functions -----*/

init();

function init() {
    board = [
        [null, null, null], // column 0
        [null, null, null], // column 1
        [null, null, null], // column 2
    ];
    turn = 1;
    winner = null;
    render();
}
function render() {

}

function handleClick(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Call marker miss no click
    if (colIdx === -1) return;
    console.log(colIdx);
}

