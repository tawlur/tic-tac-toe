//  constants

const playerLookup = {
    '1': 'Player X',
    '-1': 'Player O',
    'null': 'transparent'
};
/*----- app's state (variables) -----*/
let board;  //Array of column arrays with 1, -1, or null
let turn; // 1 or -1 player
let winner; // 1 = player 1 // -1 = player 2 //  T = tie  // null = game in play/tie

/*----- cached element references -----*/
const markerEls = Array.from(document.querySelectorAll("#board > div"));
// pair message for turn
const msgEl = document.getElementById('msg');
//const msgEl = Array.from(document.querySelector);

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

// Transfer state to the dom
function render() {
    //render board
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cell, rowIdx) {
            const div = document.getElementById(`c${colIdx}r${rowIdx}`)
                div.style.backgroundColor = playerLookup [cell];
        })
    })
    // render turn or winner message
    if (winner) {

    } else {
        //render whos turn
        msgEl.innerHTML = `${playerLookup[turn]}'s Turn`;
    }
};

function handleClick(evt) {
    // col index of  clicked marker
    const colIdx = markerEls.indexOf(evt.target);
    // Click in the box ensure
    if (colIdx === -1) return;
    //get inex of null in col array
    const rowIdx = board    

    turn *= -1;
    // turn = turn times -1
    render();
console.log(colIdx);
}

