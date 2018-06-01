//----------DEFINING VARIABLES & CANVAS----------//

var X = 160;
var Y = 200;
var level = 1; //Change back later
var oldX;
var oldY;

setActiveCanvas("canvasMaze");
setStrokeColor("white");
setStrokeWidth(3);

//----------INITIAL SCREENS----------//

onEvent("buttonPlay", "click", function() {
  setScreen("screenInstructions");
});

onEvent("buttonGo", "click", function() {
  setProperty("screenMaze","image","assets/gereeeen.png");
  level = 1;
  hideWalls2();
  showWalls1();
  showElement("borderBlocking1");
  hideElement("borderBlocking2");
  showElement("borderBlocking3");
  setScreen("screenMaze");
  penUp();
  moveTo(X,Y);
});

onEvent("buttonEnd", "click", function() {
  setScreen("screenStart");
});


//----------KEY BINDINGS----------// BOOLEAN EXPRESSIONS!

onEvent("screenMaze", "keydown", function(event) {
  if (event.key == "Left" || event.key =="a") {
    buttonColor("buttonLeft");
    X = X - 5;
    oldX = X + 20;
    oldY = Y;
    turnTo(270);

  } else if (event.key == "Right" || event.key =="d") {
    buttonColor("buttonRight");
    X = X + 5;
    oldX = X - 20;
    oldY = Y;
    turnTo(90);

  } else if (event.key == "Up" || event.key =="w") {
    buttonColor("buttonUp");
    Y = Y - 5;
    oldY = Y + 20;
    oldX = X;
    turnTo(0);

  } else if (event.key == "Down" || event.key =="s") {
    buttonColor("buttonDown");
    Y = Y + 5;
    oldY = Y - 20;
    oldX = X;
    turnTo(180);
  }
  
  if (level == 1) {
    updateTurtle1();
  } else if (level == 2) {
    updateTurtle2();
  } else {
    updateTurtle3();
  }
});

onEvent("buttonLeft", "click", function() {
  buttonColor("buttonLeft");
  X = X - 5;
  oldX = X + 20;
  oldY = Y;
  turnTo(270);
  if (level == 1) {
    updateTurtle1();
  } else if (level == 2) {
    updateTurtle2();
  } else {
    updateTurtle3();
  }
});

onEvent("buttonRight", "click", function() {
  buttonColor("buttonRight");
  X = X + 5;
  oldX = X - 20;
  oldY = Y;
  turnTo(90);
  if (level == 1) {
    updateTurtle1();
  } else if (level == 2) {
    updateTurtle2();
  } else {
    updateTurtle3();
  }
});

onEvent("buttonUp", "click", function() {
  buttonColor("buttonUp");
  Y = Y - 5;
  oldY = Y + 20;
  oldX = X;
  turnTo(0);
  if (level == 1) {
    updateTurtle1();
  } else if (level == 2) {
    updateTurtle2();
  } else {
    updateTurtle3();
  }
});

onEvent("buttonDown", "click", function() {
  buttonColor("buttonDown");
  Y = Y + 5;
  oldY = Y - 20;
  oldX = X;
  turnTo(180);
  if (level == 1) {
    updateTurtle1();
  } else if (level == 2) {
    updateTurtle2();
  } else {
    updateTurtle3();
  }
});

function buttonColor(buttonID){
  setProperty(buttonID,"background-color","#2f3392");
  setTimeout(function() {
    setProperty(buttonID,"background-color","#333eff");
  }, 250);
  
}

//----------UPDATING MOVEMENT----------// ABSTRACTION!

function updateTurtle1(){
  X = border(X,5,315);
  Y = border(Y,5,385);
  
  //wall1
  X = longWall(X,Y,115,121,127,155,278);
  Y = shortWall(Y,X,155,167,278,266,115,127);
  
  //wall2
  X = longWall(X,Y,194,200,206,155,240);
  Y = shortWall(Y,X,155,167,240,228,194,206);
  
  //wall3
  X = shortWall(X,Y,77,89,282,270,153,165);
  Y = longWall(Y,X,153,159,165,77,282);
  
  //wall4
  X = shortWall(X,Y,194,206,283,271,230,242);
  Y = longWall(Y,X,230,236,242,194,283);
  
  //wall5
  X = shortWall(X,Y,235,247,330,318,192,204);
  Y = longWall(Y,X,192,198,204,235,322);
  
  //wall6
  X = longWall(X,Y,233,239,245,38,163);
  Y = shortWall(Y,X,38,50,163,151,233,245);
  
  //wall7
  X = shortWall(X,Y,275,287,333,321,114,126);
  Y = longWall(Y,X,114,120,126,275,333);
  
  //wall8
  X = shortWall(X,Y,218,230,284,272,75,87);
  Y = longWall(Y,X,75,81,87,218,284);
  
  //wall9
  X = longWall(X,Y,272,278,284,0,47);
  Y = shortWall(Y,X,0,12,47,35,272,284);
  
  //wall10
  X = longWall(X,Y,193,199,205,0,125);
  Y = shortWall(Y,X,0,12,125,113,193,205);
  
  //wall11
  X = shortWall(X,Y,147,159,220,208,115,127);
  Y = longWall(Y,X,115,121,127,147,220);
  
  //wall12
  X = longWall(X,Y,150,156,162,107,164);
  Y = shortWall(Y,X,107,119,164,152,150,162);
  
  //wall13
  X = shortWall(X,Y,115,127,177,165,230,242);
  Y = longWall(Y,X,230,236,242,115,177);
  
  //wall14
  X = longWall(X,Y,155,161,167,230,315);
  Y = shortWall(Y,X,230,242,315,302,155,167);
  
  //wall15
  X = shortWall(X,Y,117,129,167,155,308,320);
  Y = longWall(Y,X,308,314,320,117,167);
  
  //wall16
  X = shortWall(X,Y,68,80,127,115,270,282);
  Y = longWall(Y,X,270,276,282,68,127);
  
  //wall17
  X = longWall(X,Y,75,81,87,270,355);
  Y = shortWall(Y,X,270,282,355,343,75,87);
  
  //wall18
  X = shortWall(X,Y,75,87,206,194,347,359);
  Y = longWall(Y,X,347,353,359,75,206);
  
  //wall19
  X = longWall(X,Y,194,200,206,270,359);
  Y = shortWall(Y,X,270,282,359,347,194,206);
  
  //wall20
  X = shortWall(X,Y,193,205,288,276,270,282);
  Y = longWall(Y,X,270,276,282,193,288);
  
  //wall21
  X = longWall(X,Y,275,281,287,270,359);
  Y = shortWall(Y,X,270,282,359,347,275,287);
  
  //wall22
  X = longWall(X,Y,234,240,246,310,410);
  Y = shortWall(Y,X,310,322,410,398,234,246);
  
  //wall23
  X = longWall(X,Y,36,42,48,233,361);
  Y = shortWall(Y,X,233,245,361,349,36,48);
  
  //wall24
  X = shortWall(X,Y,-14,-2,86,74,230,242);
  Y = longWall(Y,X,230,236,242,-14,86);
  
  //wall25
  X = shortWall(X,Y,33,45,87,75,192,204);
  Y = longWall(Y,X,192,198,204,33,87);
  
  //wall26
  X = longWall(X,Y,37,43,49,74,204);
  Y = shortWall(Y,X,74,86,204,192,37,49);
  
  //wall27
  X = shortWall(X,Y,34,46,128,116,114,126);
  Y = longWall(Y,X,114,120,126,34,128);
  
  //wall28
  X = longWall(X,Y,115,121,127,75,125);
  Y = shortWall(Y,X,75,87,125,113,115,127);
  
  //wall29
  X = shortWall(X,Y,73,85,166,154,75,87);
  Y = longWall(Y,X,75,81,87,73,166);
  
  //wall30
  X = longWall(X,Y,154,160,166,37,88);
  Y = shortWall(Y,X,37,49,88,76,154,166);
  
  //wall31
  X = longWall(X,Y,75,81,87,37,88);
  Y = shortWall(Y,X,37,49,88,76,75,87);
  
  //wall32
  X = shortWall(X,Y,38,50,89,77,35,47);
  Y = longWall(Y,X,35,41,47,38,89);
  
  //wall33
  X = shortWall(X,Y,114,126,166,154,35,47);
  Y = longWall(Y,X,35,41,47,114,166);
  
  //wall34
  X = longWall(X,Y,114,120,126,-17,41);
  Y = shortWall(Y,X,-17,-5,41,29,114,126);
  
  clearCanvas();
  line(oldX,oldY,X,Y);
  
  if((X >= 124) && (X <= 160) && (Y == 5)) {
    level = 2;
    setProperty("screenMaze","image","assets/bvlue.png");
    Y = 384;
    X = X;
    moveTo(X, Y);
    hideWalls1();
    showWalls2();
    hideElement("borderBlocking1");
    showElement("borderBlocking2");
    hideElement("borderBlocking3");
    clearCanvas();
  }
  
  moveTo(X, Y);
  
}

function updateTurtle2() {
  X = border(X,5,315);
  Y = border(Y,5,385);
  
  //wall35
  X = shortWall(X,Y,-25,-13,125,113,344,356);
  Y = longWall(Y,X,344,350,356,-25,125);
  
  //wall36
  X = shortWall(X,Y,34,46,249,235,304,316);
  Y = longWall(Y,X,304,310,316,34,249);
  
  //wall37
  X = longWall(X,Y,193,199,205,346,396);
  Y = shortWall(Y,X,346,358,396,384,193,205);
  
  //wall38
  X = longWall(X,Y,154,160,166,307,354);
  Y = shortWall(Y,X,307,319,354,342,154,166);
  
  //wall39
  X = longWall(X,Y,233,239,245,266,355);
  Y = shortWall(Y,X,266,278,355,343,233,245);
  
  //wall40
  X = shortWall(X,Y,233,245,284,272,343,355);
  Y = longWall(Y,X,343,349,355,233,284);
  
  //wall41
  X = shortWall(X,Y,275,289,335,323,305,317);
  Y = longWall(Y,X,305,311,317,275,335);
  
  //wall42
  X = shortWall(X,Y,233,245,284,272,265,277);
  Y = longWall(Y,X,265,271,277,233,284);
  
  //wall43
  X = longWall(X,Y,272,278,284,230,277);
  Y = shortWall(Y,X,230,242,277,265,272,284);
  
  //wall44
  X = longWall(X,Y,35,41,47,190,315);
  Y = shortWall(Y,X,190,202,315,303,35,47);
  
  //wall45
  X = shortWall(X,Y,34,46,85,73,190,202);
  Y = longWall(Y,X,190,196,202,34,85);
  
  //wall46
  X = longWall(X,Y,115,121,127,150,315);
  Y = shortWall(Y,X,150,162,315,303,115,127);
  
  //wall47
  X = shortWall(X,Y,77,89,165,153,228,240);
  Y = longWall(Y,X,228,234,240,77,165);
  
  //wall48
  X = longWall(X,Y,77,83,89,230,277);
  Y = shortWall(Y,X,230,242,277,265,77,89);
  
  //wall49
  X = shortWall(X,Y,35,47,127,115,150,162);
  Y = longWall(Y,X,150,156,162,35,127);
  
  //wall50
  X = longWall(X,Y,35,41,47,115,160);
  Y = shortWall(Y,X,115,127,160,148,35,47);
  
  //wall51
  X = shortWall(X,Y,-22,-10,47,35,115,127);
  Y = longWall(Y,X,115,121,127,-22,47);
  
  //wall52
  X = shortWall(X,Y,193,205,246,234,228,240);
  Y = longWall(Y,X,228,234,240,193,246);
  
  //wall53
  X = shortWall(X,Y,155,167,208,196,265,277);
  Y = longWall(Y,X,265,271,277,155,208);
  
  //wall54
  X = longWall(X,Y,195,201,207,150,276);
  Y = shortWall(Y,X,150,162,276,264,195,207);
  
  //wall55
  X = longWall(X,Y,234,240,246,190,239);
  Y = shortWall(Y,X,190,202,239,227,234,246);
  
  //wall56
  X = shortWall(X,Y,234,246,285,273,190,202);
  Y = longWall(Y,X,190,196,202,234,285);
  
  //wall57
  X = shortWall(X,Y,153,165,245,233,150,162);
  Y = longWall(Y,X,150,156,162,153,245);
  
  //wall58
  X = longWall(X,Y,154,160,166,112,201);
  Y = shortWall(Y,X,112,124,201,189,154,166);
  
  //wall59
  X = shortWall(X,Y,76,88,166,154,112,124);
  Y = longWall(Y,X,112,118,124,76,166);
  
  //wall60
  X = longWall(X,Y,233,239,245,-29,161);
  Y = shortWall(Y,X,-29,-17,161,149,233,245);
  
  //wall61
  X = shortWall(X,Y,233,245,285,273,74,86);
  Y = longWall(Y,X,74,80,86,234,285);
  
  //wall62
  X = shortWall(X,Y,275,287,335,323,150,162);
  Y = longWall(Y,X,150,156,162,275,335);
  
  //wall63
  X = longWall(X,Y,275,281,287,115,162);
  Y = shortWall(Y,X,115,127,162,150,275,287);
  
  //wall64
  X = shortWall(X,Y,275,287,335,323,35,47);
  Y = longWall(Y,X,35,41,47,275,335);
  
  //wall65
  X = shortWall(X,Y,35,47,207,195,74,86);
  Y = longWall(Y,X,74,80,86,35,207);
  
  //wall66
  X = longWall(X,Y,35,41,47,35,85);
  Y = shortWall(Y,X,35,47,85,73,35,47);
  
  //wall67
  X = longWall(X,Y,75,81,87,-15,47);
  Y = shortWall(Y,X,-15,-3,47,35,75,87);
  
  //wall68
  X = shortWall(X,Y,74,86,126,114,35,47);
  Y = longWall(Y,X,35,41,47,74,126);
  
  //wall69
  X = longWall(X,Y,195,201,207,35,124);
  Y = shortWall(Y,X,35,47,124,112,195,207);
  
  //wall70
  X = shortWall(X,Y,153,165,207,195,35,47);
  Y = longWall(Y,X,35,41,47,153,207);
  
  //wall71
  X = longWall(X,Y,154,160,166,-42,47);
  Y = shortWall(Y,X,-42,-30,47,35,154,166);
  
  clearCanvas();
  line(oldX,oldY,X,Y);
  
  if((X >= 160) && (X <= 195) && (Y == 5)) {
    Y = 160;
    X = 200;
    moveTo(X, Y);
    hideWalls2();
    clearCanvas();
    setScreen("screenEnd");
  }
  
  moveTo(X, Y);
}

function updateTurtle3() {
  X = border(X,5,315);
  Y = border(Y,5,385);
  
  clearCanvas();
  line(oldX,oldY,X,Y);
  
  moveTo(X, Y);
}

//----------BORDER & WALL FUNCTIONS----------// BOOLEAN EXPRESSIONS & ABSTRACTION!

function border(input, low, high){
  var output;
  if (input < low) {
    output = low;
  } else if (input > high) {
    output = high;
  } else {
    output = input;
  }
  return output;
}

function longWall(inputMain, inputSide, lowMain, midMain, highMain, lowSide, highSide){
  var output;
  if ((inputSide > lowSide) && (inputSide < highSide)) {
    if (inputMain >= lowMain) {
      if (inputMain < midMain) {
        output = lowMain;
        return output;
      } else if (inputMain <= highMain) {
      if (inputMain > midMain) {
        output = highMain;
        return output;
      } else {
        output = inputMain;
        return output;
      }
      }
    }
  }
  output = inputMain;
  return output;
}

function shortWall(inputMain, inputSide, lowMain, midLowMain, highMain, midHighMain, lowSide, highSide) {
  var output;
  if ((inputSide > lowSide) && (inputSide < highSide)) {
    if ((inputMain >= lowMain) && (inputMain < midLowMain)) {
        output = lowMain;
        return output;
      } else if ((inputMain <= highMain) && (inputMain > midHighMain)) {
        output = highMain;
        return output;
      } else {
        output = inputMain;
        return output;
      }
  }
  output = inputMain;
  return output;
}

//----------HIDING THE WALLS----------//

function hideWalls1() {
  hideElement("wall1");
  hideElement("wall2");
  hideElement("wall3");
  hideElement("wall4");
  hideElement("wall5");
  hideElement("wall6");
  hideElement("wall7");
  hideElement("wall8");
  hideElement("wall9");
  hideElement("wall10");
  hideElement("wall11");
  hideElement("wall12");
  hideElement("wall13");
  hideElement("wall14");
  hideElement("wall15");
  hideElement("wall16");
  hideElement("wall17");
  hideElement("wall18");
  hideElement("wall19");
  hideElement("wall20");
  hideElement("wall21");
  hideElement("wall22");
  hideElement("wall23");
  hideElement("wall24");
  hideElement("wall25");
  hideElement("wall26");
  hideElement("wall27");
  hideElement("wall28");
  hideElement("wall29");
  hideElement("wall30");
  hideElement("wall31");
  hideElement("wall32");
  hideElement("wall33");
  hideElement("wall34");
}

function hideWalls2() {
  hideElement("wall35");
  hideElement("wall36");
  hideElement("wall37");
  hideElement("wall38");
  hideElement("wall39");
  hideElement("wall40");
  hideElement("wall41");
  hideElement("wall42");
  hideElement("wall43");
  hideElement("wall44");
  hideElement("wall45");
  hideElement("wall46");
  hideElement("wall47");
  hideElement("wall48");
  hideElement("wall49");
  hideElement("wall50");
  hideElement("wall51");
  hideElement("wall52");
  hideElement("wall53");
  hideElement("wall54");
  hideElement("wall55");
  hideElement("wall56");
  hideElement("wall57");
  hideElement("wall58");
  hideElement("wall59");
  hideElement("wall60");
  hideElement("wall61");
  hideElement("wall62");
  hideElement("wall63");
  hideElement("wall64");
  hideElement("wall65");
  hideElement("wall66");
  hideElement("wall67");
  hideElement("wall68");
  hideElement("wall69");
  hideElement("wall70");
  hideElement("wall71");
}

//----------SHOWING THE WALLS----------//

function showWalls1() {
  showElement("wall1");
  showElement("wall2");
  showElement("wall3");
  showElement("wall4");
  showElement("wall5");
  showElement("wall6");
  showElement("wall7");
  showElement("wall8");
  showElement("wall9");
  showElement("wall10");
  showElement("wall11");
  showElement("wall12");
  showElement("wall13");
  showElement("wall14");
  showElement("wall15");
  showElement("wall16");
  showElement("wall17");
  showElement("wall18");
  showElement("wall19");
  showElement("wall20");
  showElement("wall21");
  showElement("wall22");
  showElement("wall23");
  showElement("wall24");
  showElement("wall25");
  showElement("wall26");
  showElement("wall27");
  showElement("wall28");
  showElement("wall29");
  showElement("wall30");
  showElement("wall31");
  showElement("wall32");
  showElement("wall33");
  showElement("wall34");
}

function showWalls2() {
  showElement("wall35");
  showElement("wall36");
  showElement("wall37");
  showElement("wall38");
  showElement("wall39");
  showElement("wall40");
  showElement("wall41");
  showElement("wall42");
  showElement("wall43");
  showElement("wall44");
  showElement("wall45");
  showElement("wall46");
  showElement("wall47");
  showElement("wall48");
  showElement("wall49");
  showElement("wall50");
  showElement("wall51");
  showElement("wall52");
  showElement("wall53");
  showElement("wall54");
  showElement("wall55");
  showElement("wall56");
  showElement("wall57");
  showElement("wall58");
  showElement("wall59");
  showElement("wall60");
  showElement("wall61");
  showElement("wall62");
  showElement("wall63");
  showElement("wall64");
  showElement("wall65");
  showElement("wall66");
  showElement("wall67");
  showElement("wall68");
  showElement("wall69");
  showElement("wall70");
  showElement("wall71");
}
