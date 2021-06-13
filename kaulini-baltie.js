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
var whiteKing = document.getElementById("white-king");
ctx.drawImage(whiteKing, xe, y1);

var whiteQueen = document.getElementById("white-queen");
ctx.drawImage(whiteQueen, xd, y1);


//BLACK - ROOKS
var whiteRook = document.getElementById("white-rook");
ctx.drawImage(whiteRook, xa, y1);

var whiteRook2 = document.getElementById("white-rook");
ctx.drawImage(whiteRook2, xh, y1);

//BLACK - BISHOPS
var whiteBishop = document.getElementById("white-bishop");
ctx.drawImage(whiteBishop, xc, y1);

var whiteBishop2 = document.getElementById("white-bishop");
ctx.drawImage(whiteBishop2, xf, y1);


//WHITE - KNIGHTS
var whiteKnight = document.getElementById("white-knight");
//ctx.drawImage(whiteKnight, xb, y1);
ctx.drawImage(whiteKnight, xa, y3);

var whiteKnight2 = document.getElementById("white-knight");
//ctx.drawImage(whiteKnight2, xg, y1);
ctx.drawImage(whiteKnight2, xh, y3);

//--------white-pawnS
var whitePawnA = document.getElementById("white-pawn");
ctx.drawImage(whitePawnA, xa, y2);

var whitePawnB = document.getElementById("white-pawn");
ctx.drawImage(whitePawnB, xb, y2);

var whitePawnC = document.getElementById("white-pawn");
//ctx.drawImage(whitePawnC, xc, y2);
ctx.drawImage(whitePawnC, xc, y3);

var whitePawnD = document.getElementById("white-pawn");
ctx.drawImage(whitePawnD, xd, y2);

var whitePawnE = document.getElementById("white-pawn");
//ctx.drawImage(whitePawnE, xe, y2);


var whitePawnF = document.getElementById("white-pawn");
//ctx.drawImage(whitePawnF, xf, y2);
ctx.drawImage(whitePawnF, xf, y3);

var whitePawnG = document.getElementById("white-pawn");
ctx.drawImage(whitePawnG, xg, y2);

var whitePawnH = document.getElementById("white-pawn");
ctx.drawImage(whitePawnH, xh, y2);



