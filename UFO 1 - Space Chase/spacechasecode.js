function startGame () {
  setPosition("imageMars", randomNumber(0, 230), randomNumber(0, 360), 90, 90);
  setPosition("imageAsteroid", randomNumber(0, 260), randomNumber(0, 390), 60, 60);
  setPosition("imageUfo", randomNumber(0, 230), randomNumber(0, 360), 95, 70);
}
function reset () {
  showElement("imageMars");
}

onEvent("buttonPlay1", "click", function(){
  setScreen("screenChase");
  reset();
  startGame();
  console.log("New mission initiated!");
});

onEvent("buttonInstructions1", "click", function() {
  setScreen("screenInstructions1");
});
onEvent("buttonBack", "click", function() {
  setScreen("screenWelcome");
});

onEvent("imageUfo", "mouseover", function(){
  setPosition("imageUfo", randomNumber(0, 225), randomNumber(0, 380), 95, 70);
});
onEvent("imageUfo", "click", function(){
  console.log("You clicked the UFO!");
  setScreen("screenWin");
});

onEvent("imageMars", "click", function(){
  console.log("Mars knocked into the asteroid and pinged away.");
  hideElement("imageMars");
  setPosition("imageAsteroid", randomNumber(0, 260), randomNumber(0, 390), 60, 60);
});
onEvent("imageAsteroid", "mouseover", function() {
  console.log("You crashed into the asteroid. :(");
  setScreen("screenGameOver");
});

onEvent("imageBlackHole", "mousemove", function(){
  setPosition("imageUfo", randomNumber(0, 230), randomNumber(0, 360), 95, 70);
});
onEvent("imageBackground", "click", function() {
  console.log("The UFO got away. :(");
  setScreen("screenGameOver");
});

onEvent("buttonRetry", "click", function() {
  setScreen("screenChase");
  reset();
  startGame();
  console.log("New mission initiated!");
});
onEvent("buttonMainMenu", "click", function() {
  setScreen("screenWelcome");
});

onEvent("buttonWin", "click", function() {
  setScreen("screenWelcome");
});
