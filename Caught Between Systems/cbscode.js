onEvent("buttonInstructions", "click", function() {
  setScreen("screenInstructions");
});
onEvent("buttonInstructionsBack", "click", function() {
  setScreen("screenTitleScreen");
});
onEvent("buttonCredits", "click", function() {
  setScreen("screenCredits");
});
onEvent("buttonCreditsBack", "click", function() {
  setScreen("screenTitleScreen");
});
onEvent("buttonOptions", "click", function() {
  setScreen("screenOptions");
});
onEvent("buttonOptionsBack", "click", function() {
  setScreen("screenTitleScreen");
});
onEvent("buttonMinigame", "click", function() {
  setScreen("screenMinigame");
});
onEvent("buttonMinigameCancel", "click", function() {
  setScreen("screenTitleScreen");
});
onEvent("buttonMinigameContinue", "click", function() {
  hide();
  setScreen("mScreenMain");
});

onEvent("buttonOptionsSoundOff", "click", function() {
  showElement("imageOptionsSoundNotif");
  showElement("buttonOptionsSoundNotif");
  showElement("labelOptionsSoundNotif");
  showElement("buttonOptionsSoundOn");
  showElement("buttonOptionsBackFake");
});
onEvent("buttonOptionsSoundNotif", "click", function() {
  hideElement("imageOptionsSoundNotif");
  hideElement("buttonOptionsSoundNotif");
  hideElement("labelOptionsSoundNotif");
  hideElement("buttonOptionsSoundOn");
  hideElement("buttonOptionsBackFake");
});


function startGame () {
  setPosition("mMars", randomNumber(0, 230), randomNumber(0, 360), 90, 90);
  setPosition("mAsteroid", randomNumber(0, 260), randomNumber(0, 390), 60, 60);
  setPosition("mUfo", randomNumber(0, 230), randomNumber(0, 360), 95, 70);
}
function reset () {
  showElement("mMars");
}
function show () {
  showElement("mReturn");
  showElement("mLabelReturn");
  showElement("mButtonReturnYes");
  showElement("mButtonReturnNo");
  showElement("mButtonInstructionsFake");
  showElement("mButtonPlayFake");
}
function hide () {
  hideElement("mReturn");
  hideElement("mLabelReturn");
  hideElement("mButtonReturnYes");
  hideElement("mButtonReturnNo");
  hideElement("mButtonInstructionsFake");
  hideElement("mButtonPlayFake");
}

onEvent("mButtonPlay", "click", function(){
  setScreen("mScreenChase");
  reset();
  startGame();
  console.log("New mission initiated!");
});

onEvent("mButtonInstructions", "click", function() {
  setScreen("mScreenInstructions");
});
onEvent("mButtonBack", "click", function() {
  setScreen("mScreenMain");
});

onEvent("mButtonReturn", "click", function() {
  show();
});
onEvent("mButtonReturnNo", "click", function() {
  hide();
});
onEvent("mButtonReturnYes", "click", function() {
  setScreen("screenTitleScreen");
});

onEvent("mUfo", "mouseover", function(){
  setPosition("mUfo", randomNumber(0, 225), randomNumber(0, 380), 95, 70);
});
onEvent("mUfo", "click", function(){
  console.log("You clicked the UFO!");
  setScreen("mScreenWin");
});

onEvent("mMars", "click", function(){
  console.log("Mars knocked into the asteroid and pinged away.");
  hideElement("mMars");
  setPosition("mAsteroid", randomNumber(0, 260), randomNumber(0, 390), 60, 60);
});
onEvent("mAsteroid", "mouseover", function() {
  console.log("You crashed into the asteroid. :(");
  setScreen("mScreenGameOver");
});

onEvent("mBlackHole", "mousemove", function(){
  setPosition("mUfo", randomNumber(0, 230), randomNumber(0, 360), 95, 70);
});
onEvent("mBackground", "click", function() {
  console.log("The UFO got away. :(");
  setScreen("mScreenGameOver");
});

onEvent("mButtonRetry", "click", function() {
  setScreen("mScreenChase");
  reset();
  startGame();
  console.log("New mission initiated!");
});
onEvent("mButtonMainMenu", "click", function() {
  setScreen("mScreenMain");
});

onEvent("mButtonWin", "click", function() {
  setScreen("mScreenMain");
});


onEvent("buttonBegin", "click", function() {
  setScreen("screenSteam1");
});
onEvent("objectSteam", "click", function() {
  setPosition("objectSteam", randomNumber(0, 245), randomNumber(0, 375), 75, 75);
});
onEvent("buttonSteam1Continue1", "click", function() {
  hideElement("buttonSteam1Continue1");
  showElement("labelSteam1-2");
  showElement("buttonSteam1Continue2");
});
onEvent("buttonSteam1Continue2", "click", function() {
  setScreen("screenSteam2");
});

onEvent("buttonSteam2Continue1", "click", function() {
  setScreen("screenSteam3");
});
onEvent("buttonSteam3Continue1", "click", function() {
  hideElement("buttonSteam3Continue1");
  showElement("buttonSteam3Continue2");
  showElement("labelSteam3-2");
});
onEvent("buttonSteam3Continue2", "click", function() {
  hideElement("buttonSteam3Continue2");
  showElement("buttonSteam3Continue3");
  showElement("labelSteam3-3");
});
onEvent("buttonSteam3Continue3", "click", function() {
  hideElement("buttonSteam3Continue3");
  showElement("buttonSteam3Continue4");
  showElement("labelSteam3-4");
});
onEvent("buttonSteam3Continue4", "click", function() {
  hideElement("buttonSteam3Continue4");
  showElement("buttonSteam3Continue5");
  showElement("labelSteam3-5");
});
onEvent("buttonSteam3Continue5", "click", function() {
  showElement("labelGameHub");
  showElement("labelGameHubGo");
  setScreen("screenGameHub");
});
onEvent("labelGameHubGo", "click", function() {
  hideElement("labelGameHub");
  hideElement("labelGameHubGo");
});
onEvent("buttonBOIR", "click", function() {
  setScreen("screenGameBOIR");
  playSound("http://66.90.93.122/ost/the-binding-of-isaac-soundtrack/zinyrraszg/05-sacrificial.mp3", true);
});
onEvent("buttonCSGO", "click", function() {
  setScreen("screenGameCSGO");
  playSound("http://66.90.93.122/ost/counter-strike-global-offensive-soundtrack/xckufnpyoy/02-counter-strike-global-offensive-theme-2.mp3", true);
});
onEvent("buttonFNAF", "click", function() {
  setScreen("screenGameFNAF");
  playSound("http://66.90.93.122/ost/five-nights-at-freddy-s-ost/oqbdamgedg/music-box.mp3", true);
});
onEvent("buttonMinecraft", "click", function() {
  setScreen("screenGameMinecraft");
  playSound("http://66.90.93.122/ost/minecraft/bkdkskmmjx/Volume%20Alpha%20-%2008%20-%20Minecraft.mp3", true);
});
onEvent("buttonPortal", "click", function() {
  setScreen("screenGamePortal");
  playSound("http://www.tinkafoo.com/temp/portal-radio.mp3", true);
});
onEvent("buttonHexagon", "click", function() {
  setScreen("screenGameHexagon");
  playSound("http://66.90.93.122/ost/super-hexagon/edawfovvrt/02-otis.mp3", true);
});
onEvent("buttonUndertale", "click", function() {
  setScreen("screenGameUndertale");
  playSound("http://66.90.93.122/ost/undertale-soundtrack-2015-/yfnrkyooqv/100%20-%20MEGALOVANIA.mp3", true);
});
onEvent("buttonMoreGames", "click", function() {
  showElement("labelMoreGames");
});
onEvent("labelMoreGames", "click", function() {
  hideElement("labelMoreGames");
});
onEvent("buttonBOIRBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonCSGOBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonFNAFBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonMinecraftBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonPortalBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonHexagonBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonUndertaleBack", "click", function() {
  setScreen("screenGameHub");
  stopSound();
});
onEvent("buttonBOIRDoor", "click", function() {
  setScreen("screenEscape");
  stopSound();
  playSound("http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Fanfare_Item.wav",false);
});
onEvent("imageFNAFKey", "click", function() {
  hideElement("imageFNAFKey");
  hideElement("imageCSGOCase");
});
onEvent("imageHexagonCube", "click", function() {
  hideElement("imageHexagonCube");
  showElement("imagePortalCube");
  showElement("buttonPortalChest3");
});
onEvent("imageMinecraftEnderman", "mouseover", function(){
  setPosition("imageMinecraftEnderman", randomNumber(0, 245), randomNumber(0, 325), 75, 125);
});
onEvent("imageMinecraftEnderman", "click", function() {
  hideElement("imagePortalGrass");
  hideElement("imageMinecraftEnderman");
 });
onEvent("imageUndertaleFlower", "click", function() {
  hideElement("imageUndertaleFlower");
  hideElement("imagePortalHeart");
});
onEvent("imageUndertaleDeath1", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath2", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath3", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath4", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath5", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath6", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath7", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageUndertaleDeath8", "mouseover", function() {
  setScreen("screenGameHub");
});
onEvent("imageBOIRKey", "click", function() {
  hideElement("imageBOIRDoor");
  hideElement("imageBOIRKey");
});
onEvent("imageCSGOMario", "click", function() {
  hideElement("imageCSGOMario");
  hideElement("imageHubGoomba1");
  hideElement("imageHubGoomba2");
  hideElement("imageHubGoomba3");
});
onEvent("buttonPortalChest3", "click", function() {
  hideElement("imageBOIRChestGray");
});
onEvent("buttonPortalChest2", "click", function() {
  hideElement("imageBOIRChestRed");
});
onEvent("buttonPortalChest1", "click", function() {
  hideElement("imageBOIRChestGold");
});
onEvent("buttonEscape", "click", function() {
  setScreen("screenTitleScreen");
});
