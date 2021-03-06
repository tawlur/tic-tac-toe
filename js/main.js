//  constants

const playerLookup = {
  "1": "  X",
  "-1": "  O",
  null: null,
};
/*----- app's state (variables) -----*/
let board; //Array of column arrays with 1, -1, or null
let turn; // 1 or -1 player
let winner; // 1 = player 1 // -1 = player 2 //  T = tie  // null = game in play/tie

/*----- cached element references -----*/
const markerEls = Array.from(document.querySelectorAll("#board > div"));
// pair message for turn
const msgEl = document.getElementById("msg");
//const msgEl = Array.from(document.querySelector);

/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleClick);

document.querySelector(".restart").addEventListener("click", init);

/*----- functions -----*/

init();

function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

// Transfer state to the dom
function render() {
  //render board
  board.forEach(function (cell, cellIdx) {
    const div = document.getElementById(`cell${cellIdx}`);
    div.innerText = playerLookup[cell];
    // })
  });
  // render turn or winner message
  if (winner) {
  } else {
    //render whos turn
    msgEl.innerHTML = `${playerLookup[turn]}'s Turn`;
  }
}

function handleClick(evt) {
  // col index of  clicked marker
  const colIdx = markerEls.indexOf(evt.target);
  console.log(evt);
  console.log(evt.target.innerText);
  // Click in the box ensure
  if (evt.target.innerText) return;
  //get inex of null in col array
  board[colIdx] = turn;

  turn *= -1;
  // turn = turn times -1
  render();
  console.log(colIdx);
}
