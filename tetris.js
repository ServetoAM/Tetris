const SQ = 20;
const ROW = 20;
const COLUMN = 10;
const VACANT ="white";

//Create the board
let board= [];
for(r = 0, r< ROW; r++){
    board[r]=[];
    for(c= 0; c < COLUMN; c ++){
        board[r][c] = VACANT;
    }
}

//Draw a Square
function drawSquare (x,y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x*SQ, y*SQ, SQ, SQ)
}

//Draw the board
function drawBoard(){
    for(r = 0; r < ROW; r ++){
        for(c= 0; c < COLUMN; c ++){
            drawSquare(c, r, board[r][c]);
        }
    }
}
drawBoard()

