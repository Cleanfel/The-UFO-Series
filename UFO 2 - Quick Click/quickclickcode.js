playSound("http://soundimage.org/wp-content/uploads/2014/02/Steamtech-Mayhem.mp3", true);


var score;
var lives;
var extralives;
var asteroid1;
var asteroid2;
var background;


onEvent("buttonPlay", "click", function() {
  setScreen("screenInstructions");
});
onEvent("buttonGo", "click", function() {
  setScreen("screenClick");
  score = 0;
  lives = 3;
  extralives = 9;
  asteroid1 = 0;
  asteroid2 = 0;
  background = 0;
  setText("labelScore", score);
  setText("labelLives", lives);
  setText("labelExtraLives", extralives);
  hideElement("imageAsteroid2");
  setPosition("imageUfo", randomNumber(0,225), randomNumber(25, 380));
  setPosition("imageAsteroid1", randomNumber(0,260), randomNumber(25, 390));
  setPosition("imageAsteroid2", randomNumber(0,270), randomNumber(25, 400));
});


onEvent("imageUfo", "click", function() {
  setPosition("imageUfo", randomNumber(0,225), randomNumber(25, 380));
  setPosition("imageAsteroid1", randomNumber(0,260), randomNumber(25, 390));
  setPosition("imageAsteroid2", randomNumber(0,270), randomNumber(25, 400));
  score = score + 1;
  extralives = extralives - 1;
  setText("labelScore", score);
  setText("labelLives", lives);
  setText("labelExtraLives", extralives);
  if (score==30) {
    setScreen("screenWin");
    var finalscore = (score * lives) + score - (1 * background) - (2 * asteroid1) - (3 * asteroid2);
    setText("labelFinalScore", finalscore);
    if (finalscore==210) {
      showElement("labelPerfect");
    }
  }
  if (extralives===0) {
    lives = lives + 1;
    extralives = 9;
    setText("labelLives", lives);
    setText("labelExtraLives", extralives);
  }
  if (score==20) {
    showElement("imageAsteroid2");
  }
});
onEvent("imageAsteroid1", "mouseover", function() {
  setPosition("imageUfo", randomNumber(0,225), randomNumber(25, 380));
  setPosition("imageAsteroid1", randomNumber(0,260), randomNumber(25, 390));
  setPosition("imageAsteroid2", randomNumber(0,270), randomNumber(25, 400));
  lives = lives - 1;
  score = score - 3;
  asteroid1 = asteroid1 + 1;
  setText("labelScore", score);
  setText("labelLives", lives);
  if (lives===0) {
    setScreen("screenGameOver");
  }
  if (score<0) {
    score = 0;
    setText("labelScore", score);
  }
});
onEvent("imageAsteroid2", "mouseover", function() {
  setPosition("imageUfo", randomNumber(0,225), randomNumber(25, 380));
  setPosition("imageAsteroid1", randomNumber(0,260), randomNumber(25, 390));
  setPosition("imageAsteroid2", randomNumber(0,270), randomNumber(25, 400));
  lives = lives - 1;
  score = score - 4;
  asteroid2 = asteroid2 + 1;
  setText("labelScore", score);
  setText("labelLives", lives);
  if (lives===0) {
    setScreen("screenGameOver");
  }
  if (score<0) {
    score = 0;
    setText("labelScore", score);
  }
});
onEvent("imageBackground", "click", function() {
  extralives = extralives + 1;
  background = background + 1;
  setText("labelExtraLives", extralives);
  if (extralives>9) {
    extralives = 9;
    setText("labelExtraLives", extralives);
  }
});


onEvent("buttonWin", "click", function() {
  setScreen("screenWelcome");
  hideElement("labelPerfect");
  hideElement("labelGoodScore");
  hideElement("labelBadScore");
  showElement("buttonSubmit");
});


onEvent("buttonRetry", "click", function() {
  setScreen("screenClick");
  score = 0;
  lives = 3;
  extralives = 9;
  asteroid1 = 0;
  asteroid2 = 0;
  background = 0;
  setText("labelScore", score);
  setText("labelLives", lives);
  setText("labelExtraLives", extralives);
  hideElement("imageAsteroid2");
  hideElement("labelPerfect");
});
onEvent("buttonMainMenu", "click", function() {
  setScreen("screenWelcome");
});


onEvent("buttonLeaderboard", "click", function() {
  setScreen("screenLeaderboard");
});
onEvent("buttonBack", "click", function() {
  setScreen("screenWelcome");
});

var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;
var score8 = 0;
var score9 = 0;
var score10 = 0;
var score11 = 0;
var score12 = 0;
var score13 = 0;
var score14 = 0;
var score15 = 0;

var name1 = "...";
var name2 = "...";
var name3 = "...";
var name4 = "...";
var name5 = "...";
var name6 = "...";
var name7 = "...";
var name8 = "...";
var name9 = "...";
var name10 = "...";
var name11 = "...";
var name12 = "...";
var name13 = "...";
var name14 = "...";
var name15 = "...";

onEvent("buttonSubmit", "click", function() {

hideElement("buttonSubmit");

var submitpower = 1;
var finalscore = (score * lives) + score - (1 * background) - (2 * asteroid1) - (3 * asteroid2);
if (finalscore<score15) {
  showElement("labelBadScore");
}
if (finalscore>score15) {
if (finalscore>score14) {
if (finalscore>score13) {
if (finalscore>score12) {
if (finalscore>score11) {
if (finalscore>score10) {
if (finalscore>score9) {
if (finalscore>score8) {
if (finalscore>score7) {
if (finalscore>score6) {
if (finalscore>score5) {
if (finalscore>score4) {
if (finalscore>score3) {
if (finalscore>score2) {
if (finalscore>score1) {

if (score1!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
score6 = score5;
score5 = score4;
score4 = score3;
score3 = score2;
score2 = score1;
setText("labelHighScoreScore2",score2);
setText("labelHighScoreScore3",score3);
setText("labelHighScoreScore4",score4);
setText("labelHighScoreScore5",score5);
setText("labelHighScoreScore6",score6);
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score1 = finalscore;
setText("labelHighScoreScore1",score1);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
name6 = name5;
name5 = name4;
name4 = name3;
name3 = name2;
name2 = name1;
setText("labelHighScoreName2",name2);
setText("labelHighScoreName3",name3);
setText("labelHighScoreName4",name4);
setText("labelHighScoreName5",name5);
setText("labelHighScoreName6",name6);
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name1 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName1",name1);
}

if (score1===0) {
score1 = finalscore;
setText("labelHighScoreScore1", score1);
submitpower = 0;
showElement("labelGoodScore");
name1 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName1",name1);
}
}

if (submitpower==1) {
if (score2!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
score6 = score5;
score5 = score4;
score4 = score3;
score3 = score2;
setText("labelHighScoreScore3",score3);
setText("labelHighScoreScore4",score4);
setText("labelHighScoreScore5",score5);
setText("labelHighScoreScore6",score6);
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score2 = finalscore;
setText("labelHighScoreScore2",score2);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
name6 = name5;
name5 = name4;
name4 = name3;
name3 = name2;
setText("labelHighScoreName3",name3);
setText("labelHighScoreName4",name4);
setText("labelHighScoreName5",name5);
setText("labelHighScoreName6",name6);
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name2 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName2",name2);
}

if (score2===0) {
score2 = finalscore;
setText("labelHighScoreScore2", score2);
submitpower = 0;
showElement("labelGoodScore");
name2 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName2",name2);
}
}
}

if (submitpower==1) {
if (score3!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
score6 = score5;
score5 = score4;
score4 = score3;
setText("labelHighScoreScore4",score4);
setText("labelHighScoreScore5",score5);
setText("labelHighScoreScore6",score6);
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score3 = finalscore;
setText("labelHighScoreScore3",score3);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
name6 = name5;
name5 = name4;
name4 = name3;
setText("labelHighScoreName4",name4);
setText("labelHighScoreName5",name5);
setText("labelHighScoreName6",name6);
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name3 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName3",name3);
}

if (score3===0) {
score3 = finalscore;
setText("labelHighScoreScore3", score3);
submitpower = 0;
showElement("labelGoodScore");
name3 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName3",name3);
}
}
}

if (submitpower==1) {
if (score4!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
score6 = score5;
score5 = score4;
setText("labelHighScoreScore5",score5);
setText("labelHighScoreScore6",score6);
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score4 = finalscore;
setText("labelHighScoreScore4",score4);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
name6 = name5;
name5 = name4;
setText("labelHighScoreName5",name5);
setText("labelHighScoreName6",name6);
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name4 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName4",name4);
}

if (score4===0) {
score4 = finalscore;
setText("labelHighScoreScore4", score4);
submitpower = 0;
showElement("labelGoodScore");
name4 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName4",name4);
}
}
}

if (submitpower==1) {
if (score5!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
score6 = score5;
setText("labelHighScoreScore6",score6);
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score5 = finalscore;
setText("labelHighScoreScore5",score5);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
name6 = name5;
setText("labelHighScoreName6",name6);
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name5 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName5",name5);
}

if (score5===0) {
score5 = finalscore;
setText("labelHighScoreScore5", score5);
submitpower = 0;
showElement("labelGoodScore");
name5 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName5",name5);
}
}
}

if (submitpower==1) {
if (score6!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
score7 = score6;
setText("labelHighScoreScore7",score7);
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score6 = finalscore;
setText("labelHighScoreScore6",score6);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
name7 = name6;
setText("labelHighScoreName7",name7);
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name6 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName6",name6);
}

if (score6===0) {
score6 = finalscore;
setText("labelHighScoreScore6", score6);
submitpower = 0;
showElement("labelGoodScore");
name6 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName6",name6);
}
}
}

if (submitpower==1) {
if (score7!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
score8 = score7;
setText("labelHighScoreScore8",score8);
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score7 = finalscore;
setText("labelHighScoreScore7",score7);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
name8 = name7;
setText("labelHighScoreName8",name8);
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name7 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName7",name7);
}

if (score7===0) {
score7 = finalscore;
setText("labelHighScoreScore7", score7);
submitpower = 0;
showElement("labelGoodScore");
name7 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName7",name7);
}
}
}

if (submitpower==1) {
if (score8!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
score9 = score8;
setText("labelHighScoreScore9",score9);
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score8 = finalscore;
setText("labelHighScoreScore8",score8);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
name9 = name8;
setText("labelHighScoreName9",name9);
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name8 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName8",name8);
}

if (score8===0) {
score8 = finalscore;
setText("labelHighScoreScore8", score8);
submitpower = 0;
showElement("labelGoodScore");
name8 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName8",name8);
}
}
}

if (submitpower==1) {
if (score9!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
score10 = score9;
setText("labelHighScoreScore10",score10);
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score9 = finalscore;
setText("labelHighScoreScore9",score9);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
name10 = name9;
setText("labelHighScoreName10",name10);
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name9 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName9",name9);
}

if (score9===0) {
score9 = finalscore;
setText("labelHighScoreScore9", score9);
submitpower = 0;
showElement("labelGoodScore");
name9 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName9",name9);
}
}
}

if (submitpower==1) {
if (score10!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
score11 = score10;
setText("labelHighScoreScore11",score11);
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score10 = finalscore;
setText("labelHighScoreScore10",score10);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
name11 = name10;
setText("labelHighScoreName11",name11);
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name10 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName10",name10);
}

if (score10===0) {
score10 = finalscore;
setText("labelHighScoreScore10", score10);
submitpower = 0;
showElement("labelGoodScore");
name10 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName10",name10);
}
}
}

if (submitpower==1) {
if (score11!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
score12 = score11;
setText("labelHighScoreScore12",score12);
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score11 = finalscore;
setText("labelHighScoreScore11",score11);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
name12 = name11;
setText("labelHighScoreName12",name12);
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name11 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName11",name11);
}

if (score11===0) {
score11 = finalscore;
setText("labelHighScoreScore11", score11);
submitpower = 0;
showElement("labelGoodScore");
name11 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName11",name11);
}
}
}

if (submitpower==1) {
if (score12!==0) {
score15 = score14;
score14 = score13;
score13 = score12;
setText("labelHighScoreScore13",score13);
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score12 = finalscore;
setText("labelHighScoreScore12",score12);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
name13 = name12;
setText("labelHighScoreName13",name13);
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name12 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName12",name12);
}

if (score12===0) {
score12 = finalscore;
setText("labelHighScoreScore12", score12);
submitpower = 0;
showElement("labelGoodScore");
name12 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName12",name12);
}
}
}

if (submitpower==1) {
if (score13!==0) {
score15 = score14;
score14 = score13;
setText("labelHighScoreScore14",score14);
setText("labelHighScoreScore15",score15);
score13 = finalscore;
setText("labelHighScoreScore13",score13);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
name14 = name13;
setText("labelHighScoreName14",name14);
setText("labelHighScoreName15",name15);
name13 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName13",name13);
}

if (score13===0) {
score13 = finalscore;
setText("labelHighScoreScore13", score13);
submitpower = 0;
showElement("labelGoodScore");
name13 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName13",name13);
}
}
}

if (submitpower==1) {
if (score14!==0) {
score15 = score14;
setText("labelHighScoreScore15",score15);
score14 = finalscore;
setText("labelHighScoreScore14",score14);
submitpower = 0;
showElement("labelGoodScore");
name15 = name14;
setText("labelHighScoreName15",name15);
name14 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName14",name14);
}

if (score14===0) {
score14 = finalscore;
setText("labelHighScoreScore14", score14);
submitpower = 0;
showElement("labelGoodScore");
name14 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName14",name14);
}
}
}

if (submitpower==1) {
if (finalscore>score15) {
score15 = finalscore;
setText("labelHighScoreScore15",score15);
submitpower = 0;
showElement("labelGoodScore");
name15 = prompt("Please enter your name/initials! (Anything longer than the length of 3 W's will not fit.)");
setText("labelHighScoreName15",name15);
}
}
}
}
);
