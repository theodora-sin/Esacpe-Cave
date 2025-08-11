function dillenma4(){
  background(bg10);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("They find an old rope leading up to a hole.\nIt could be a shortcut out, but it looks weak.\nAva wants to try the twisting path instead.\nLiam says the rope is worth the risk.\n",110,150);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  textFont("Nunito");
  text("Decision: Risk the rope or play it safe?", width / 2, height / 2 + 20);

  // Show character on bottom left (adjusted position)
  image(playerCharacter, 50, height - 200, 100, 150);
  // Draw collected gems at the top
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }
  // Create decision buttons once
  if (!choosebutton9 && !choosebutton10) {
    choosebutton9 = createSprite(width / 2 - 115, height / 2 + 100, 120, 50);
    choosebutton9.shapeColor = color('#7D7098');
    choosebutton9.text = "Risk the rope";
    choosebutton9.textSize = 17;
    choosebutton9.textColor = "black";

    choosebutton10 = createSprite(width / 2 + 125, height / 2 + 100, 120, 50)
    choosebutton10.shapeColor = color('#7D7098');
    choosebutton10.text = "Play it safe";
    choosebutton10.textSize = 20;
    choosebutton10.textColor = "black";
  }

  if (choosebutton9.mouse.presses()) {
    gembgm.play();
    gembgm.setVolume(0.3);
    choosebutton9.remove();
    choosebutton10.remove();
    choosebutton9 = null;
    choosebutton10 = null;
    screen = 15;
  } else if (choosebutton10.mouse.presses()) {
    choosebutton9.remove();
    choosebutton10.remove();
    choosebutton9 = null;
    choosebutton10 = null;
    screen = 16;
  }
}
// transtionscreen7() function
function transtionscreen7(){
  background(bg10);
  fill(255);
  textAlign(LEFT);
  textSize(16);
  textFont("Arial");
  text("It’s longer, but along the way they\ntalk about memories from home. The air\nfeels fresher, and their bond feels stronger.",100,150);

  fill(255);
  textAlign(CENTER);
  textAlign(BOLD);
  textSize(21);
  textFont("Nunito");
  text("You earn a gem!", width / 2, 255);

  if (playerCharacter) {
    image(playerCharacter, 250, 280,100, 150);
  }

  if (gemImage1) {
    image(gemImage1, width / 2,350, 50, 50);
  }


  if (!continueButton7) {
    continueButton7 = createSprite(width / 2, height - 100, 140, 50);
    continueButton7.shapeColor = color('#341539');
    continueButton7.text = "Continue";
    continueButton7.textSize = 20;
    continueButton7.textColor = "white";
  }
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }

  if (continueButton7 && continueButton7.mouse.presses()) {
    continueButton7.remove();
    continueButton7 = null;
    collectedGems.push(gemImage4);
    screen = 17;
  }
}
// transtionscreen8() function
function transtionscreen8(){
  background(bg10);
  fill(255);
  textAlign(LEFT);
  textSize(20);
  textFont("Arial");
  text("It snaps halfway. They fall\nhard.Ava helps Liam up.\nNow they have only way to choose from.",100,190);

  image(playerCharacter, 50, height - 200, 100, 150); // Character at bottom left

  if (!continueButton8) {
    continueButton8 = createSprite(width / 2, height - 150, 140, 50);
    continueButton8.shapeColor = color('#341539');
    continueButton8.text = "Continue";
    continueButton8.textSize = 20;
    continueButton8.textColor = "white";
  }


  if (continueButton8 && continueButton8.mouse.presses()) {
    continueButton8.remove();
    continueButton8 = null;
    screen = 17;
  }
}
