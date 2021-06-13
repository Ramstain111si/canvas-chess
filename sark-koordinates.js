var c = document.getElementById("a-h");
var ctx = c.getContext("2d");

//krasa koordinashu uzrakstiem -sarkana
var grdRed = ctx.createRadialGradient(75,50,5,90,60,100);
grdRed.addColorStop(0,"red");
grdRed.addColorStop(1,"red");



//koordinatu uzrakstu burti un cipari
var x = 75;
var y = 30;

//koordinates
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

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("a",x, y);


ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("b",x + xb, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("c",x + xc, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("d",x + xd, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("e",x + xe, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("f",x + xf, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("g",x + xg, y);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("h",x + xh, y);








//////////vertikalas 1-8///////////
var c = document.getElementById("1-8");
var ctx = c.getContext("2d");

//krasa koordinashu uzrakstiem -sarkana
var grdRed = ctx.createRadialGradient(75,50,5,90,60,100);
grdRed.addColorStop(0,"red");
grdRed.addColorStop(1,"red");

var x = 20;
var y = 30;

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("8",x, y);


ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("7",x, y + y7);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("6",x, y + y6);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("5",x, y + y5);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("4",x, y + y4);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("3",x, y + y3);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("2",x, y + y2);

ctx.fillStyle = grdRed;
ctx.font = "20px Arial";
ctx.fillText("1",x, y + y1);