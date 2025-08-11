// dillenma2() function
function dillenma2(){
  background(bg5);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("They enter a wide chamber where the walls\nsparkle with thousands of gems. Their flashlight\nflickers and dies — now the only way to see\nis to collect glowing gems to light the path ahead.\nSome gems are bright and colorful, others are dull\nand cracked. Ava says they should only take the\nbright ones so they can keep moving quickly.\nLiam thinks they should take as many as\npossible, even the dull ones, in case they\nneed more later.",width/2 - 200, 90);
  fill(255);
  textAlign(CENTER);
  textSize(26);
  textFont("Nunito");
  text("Decision: Which Plan should\nthey follow", width / 2, height/2 + 50);

  // Show character on bottom left (adjusted position)
  image(playerCharacter, 50, height - 200, 100, 150);

  // Create decision buttons once
  if (!choosebutton5 && !choosebutton6) {
    choosebutton5 = createSprite(width / 2 - 105, height / 2 + 140, 120, 50);
    choosebutton5.shapeColor = color('#7D7098');
    choosebutton5.textSize= 13;
    choosebutton5.text = "Collect bright\nand dull gems.";
    choosebutton5.textColor = "black";

    choosebutton6 = createSprite(width / 2 + 105, height / 2 + 140, 120, 50);
    choosebutton6.shapeColor = color('#7D7098');
    choosebutton6.textSize= 13;
    choosebutton6.text = "Collect only the \n brightest gems.";
    choosebutton6.textColor = "black";
  }

  if (choosebutton5.mouse.presses()) {
    choosebutton5.remove();
    choosebutton6.remove();
    choosebutton5 = null;
    choosebutton6 = null;
    screen = 8;
  } else if (choosebutton6.mouse.presses()) {
    choosebutton5.remove();
    choosebutton6.remove();
    choosebutton5 = null;
    choosebutton6 = null;
    screen = 7;
  }

  // Draw collected gems at the top
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 25); // Display collected gems
  }
}

// transtionscreen3() function
function transtionscreen3(){
  background(bg6);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
    text("The gems shine like little stars in their hands,\nlighting the path forward.They smile, knowing\nthey're still finding light in the dark.", 100, 163);

  fill(255);
  textAlign(CENTER);
  textAlign(BOLD);
  textSize(21);
  textFont("Nunito");
  text("You earn a gem!", width / 2, 255);
  gembgm.play();
  gembgm.setVolume(0.3);


  image(playerCharacter, 250,280, 100, 150); // Character at bottom left
  image(gemImage2, width / 2, 350, 50, 50); // Gem image

if (!continueButton3) {
  continueButton3 = createSprite(width / 2, height - 100, 140, 50);
  continueButton3.shapeColor = color('#341539');
  continueButton3.text = "Continue";
  continueButton3.textSize = 20;
  continueButton3.textColor = "white";
}
// Draw collected gems at the top
for (let i = 0; i < collectedGems.length; i++) {
  image(collectedGems[i], 20 + i * 60, 20, 50, 50);
}

if (continueButton3 && continueButton3.mouse.presses()) {
  continueButton3.remove();
  continueButton3 = null;
  collectedGems.push(gemImage2);
  screen = 9;
}
}
// transtionscreen4() function
function transtionscreen4(){
  background(bg6);
  fill(255);
  textAlign(LEFT);
  textSize(22);
  textFont("Arial");
  text("The extra weight slows them down.\nThey drop some in the shadows —\nhope feels heavy.",110,190);

  image(playerCharacter, 50, height - 200, 100, 150); // Character at bottom left


  if (!continueButton4) {
    continueButton4 = createSprite(width / 2, height - 85, 140, 50);
    continueButton4.shapeColor = color('#341539');
    continueButton4.text = "Continue";
    continueButton4.textSize = 20;
    continueButton4.textColor = "white";
  }

  if (continueButton4 && continueButton4.mouse.presses()) {
    continueButton4.remove();
    continueButton4 = null;
    screen = 9;
    }
}