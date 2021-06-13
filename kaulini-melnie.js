var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var xa = 0;
var xb = 50;
var xc = 100;
var xd = 150;
var xe = 200;
var xf = 250;
var xg = 300;
var xh = 350;

var y8 = 0;
var y7 = 50;
var y6 = 100;
var y5 = 150;
var y4 = 200;
var y3 = 250;
var y2 = 300;
var y1 = 350;


//---------BLACK-PIECES------
var blackKing = document.getElementById("black-king");
ctx.drawImage(blackKing, xe, y8);

var blackQueen = document.getElementById("black-queen");
//ctx.drawImage(blackQueen, xd, y8);
ctx.drawImage(blackQueen, xd, y5);



//BLACK - ROOKS
var blackRook = document.getElementById("black-rook");
ctx.drawImage(blackRook, xa, y8);

var blackRook2 = document.getElementById("black-rook");
ctx.drawImage(blackRook2, xh, y8);

//BLACK - BISHOPS
var blackBishop = document.getElementById("black-bishop");
ctx.drawImage(blackBishop, xc, y8);

var blackBishop2 = document.getElementById("black-bishop");
//ctx.drawImage(blackBishop2, xf, y8);
ctx.drawImage(blackBishop2, xb, y4);


//BLACK - KNIGHTS
var blackKnight = document.getElementById("black-knight");
ctx.drawImage(blackKnight, xb, y8);

var blackKnight2 = document.getElementById("black-knight");
//ctx.drawImage(blackKnight2, xg, y8);
ctx.drawImage(blackKnight2, xf, y6);

//--------BLACK-PAWNS
var blackPawnA = document.getElementById("black-pawn");
ctx.drawImage(blackPawnA, xa, y7);

var blackPawnB = document.getElementById("black-pawn");
ctx.drawImage(blackPawnB, xb, y7);

var blackPawnC = document.getElementById("black-pawn");
ctx.drawImage(blackPawnC, xc, y7);

var blackPawnD = document.getElementById("black-pawn");
//ctx.drawImage(blackPawnD, xd, y7);
//ctx.drawImage(blackPawnD, xd, y5);

var blackPawnE = document.getElementById("black-pawn");
//ctx.drawImage(blackPawnE, xe, y7);
ctx.drawImage(blackPawnE, xe, y5);

var blackPawnF = document.getElementById("black-pawn");
ctx.drawImage(blackPawnF, xf, y7);

var blackPawnG = document.getElementById("black-pawn");
ctx.drawImage(blackPawnG, xg, y7);

var blackPawnH = document.getElementById("black-pawn");
ctx.drawImage(blackPawnH, xh, y7);



