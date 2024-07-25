//adjacency list for the chess board
// 0,0 through 7,7
//make a loop to create the adjacency list
//knight is at x,y
//for every square x -2 OR x + 2 AND THEN y + 1 OR y -1
//for every square x + 1 OR x - 1 AND THEN y + 2 OR y - 2
// ignore any squares that have an X or Y value greater than 7
//ignore any squares that have an X or Y value less than 0
//could give each square a number 0 - 63
//each square could be an object with .x, .y, and .edges
//make adjacency list out of this
//or 2 sets of 2 adjacency lists, one for each vertex
//adjacency list is a list of objects consisting of x and y

const square = (row, column, arr) => {
    let x = row;
    let y = column;
    let edges = arr;
    return {x, y, edges};
};

const newBoard = () => {
    let board = [];
    for(let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.push(square(i, j));
        };
        //find edges here
    };
    return board;
};