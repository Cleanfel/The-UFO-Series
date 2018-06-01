background();
penColor("black");
penUp();
moveTo(65,140);
turnTo(0);
stickMan();
moveTo(0, 370);

ocean();
cliff();
for (var i = 0; i < 1000; i++) {
 cloud();
}
sun();

function cliff() {
 penWidth(250);
 turnTo(0);
 penColor("tan");
 penUp();
 moveTo(0, 325);
 penDown();
 turnRight(90);
 moveForward(10);
 turnRight(70);
 moveForward(30);
 turnLeft(70);
 moveForward(10);
 turnRight(70);
 moveForward(30);
 turnRight(25);
 moveForward(300);
}
function background() {
 penColor("lightBlue");
 dot(1000);
}
function cloud() {
 penWidth(5);
 penUp();
 penColor("white");
 moveTo(0, randomNumber(-100, 50));
 penDown();
 turnLeft(90);
 moveForward(350);
}
function sun() {
 penUp();
 moveTo(5, 5);
 penColor("orange");
 dot(80);
}

function ocean() {
  penDown();
  penWidth(30);
  penRGB(0, randomNumber(100, 200), randomNumber(100, 180), 1);
  for (var i = 0; i < 10; i++) {
    arcRight(180, 15);
    arcLeft(180, 15);
  }
  penUp();
  moveTo(0,400);
  penDown();
  turnTo(90);
  penWidth(100);
  moveForward(400);
  penColor("lightGrey");
  penUp();
  moveTo(230,400);
  penDown();
  turnTo(45);
  penWidth(10);
  moveForward(20);
  turnTo(180);
  moveForward(15);
  turnTo(270);
  moveForward(10);
  
}
function stickMan() {
  penDown();
  penWidth(3);
  dot(10);
  moveBackward(50);
  bodyParts();
  bodyParts();
  penUp();
}
function bodyParts() {
  turnTo(130);
  moveForward(25);
  moveBackward(25);
  turnTo(215);
  moveForward(25);
  moveBackward(25);
  turnTo(360);
  moveForward(30);
}

penUp();
moveTo(95,140);
turnTo(90);
penWidth(3);
penColor("black");
penDown();
arcLeft(90,25);
penUp();

moveTo(20, 20);
turnTo(0);
for (;;) {
  hashtagYOLO();
  move(-234.7487373415, -25);
}

function hashtagYOLO() {

//#
penUp();
turnRight(180);
penDown();
penColor("black");
penWidth(randomNumber(5, 12));
moveForward(80);
penUp();

move(20, -80);
penDown();
moveForward(80);
penUp();
move(-35, -60);
penDown();
turnLeft(90);
moveForward(50);
penUp();
move(-50, 40);
penDown();
moveForward(50);
penUp();
//Y
move(20, -60);
turnRight(45);
penDown();
penWidth(randomNumber(5, 15));
penRGB(randomNumber(0,50), randomNumber(0,50), randomNumber(80,255), 1);
moveForward(35);
turnLeft();
moveForward(35);
penUp();
moveBackward(35);
turnRight(135);
penDown();
moveForward(55.2512626585);
penUp();
//O
move(40, -55);
turnRight(180);
penDown();
penWidth(randomNumber(5, 15));
penRGB(randomNumber(180,255), randomNumber(180,255), randomNumber(0,50), 1);
drawO();
//L
move(70, -25);
turnRight(180);
penWidth(randomNumber(5, 15));
penRGB(randomNumber(100,255), randomNumber(0,50), randomNumber(30,200), 1);
penDown();
moveForward(80);
turnLeft();
moveForward(30);
penUp();
//O
move(15, -55);
penDown();
penWidth(randomNumber(5, 15));
penRGB(randomNumber(0,50), randomNumber(60,255), randomNumber(0,50), 1);
turnLeft();
drawO();

hide();
}

function drawO() {
  for (var i = 0; i < 2; i++) {
    arcRight(180,25);
    moveForward(30);
  }
  penUp();
}
