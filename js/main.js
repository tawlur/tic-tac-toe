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



/*----- event listeners -----*/
document.getElementById('squares')
    .addEventListener('click', handleClick);


/*----- functions -----*/