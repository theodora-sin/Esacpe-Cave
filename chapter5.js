// dillenma5() function
function dillenma5(){
  background(bg12);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("Your partner suddenly collapses.\nFeverish and weak.\nBoth of you see the exit at the front.", 110,120);
  fill(255);
  textAlign(CENTER);
  textSize(22);
  textFont("Nunito");
  text("Decision:Will you carry or\nleave your partner in the cave?",width / 2, height/ 2);

  // Show character on bottom left (adjusted position)
  image(playerCharacter, 50, height - 200, 100, 150);
  // Draw collected gems at the top
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }
  // Create decision buttons once
  if (!choosebutton11 && !choosebutton12) {
    choosebutton11 = createSprite(width / 2 - 115, height / 2 + 100, 120, 50);
    choosebutton11.shapeColor = color('#7D7098');
    choosebutton11.text = "Yes";
    choosebutton11.textSize = 22;
    choosebutton11.textColor = "black";

    choosebutton12 = createSprite(width / 2 + 125, height / 2 + 100, 120, 50)
    choosebutton12.shapeColor = color('#7D7098');
    choosebutton12.text = "No";
    choosebutton12.textSize = 22;
    choosebutton12.textColor = "black";
  }

  if (choosebutton11.mouse.presses()) {
    gembgm.play();
    gembgm.setVolume(0.3);
    choosebutton11.remove();
    choosebutton12.remove();
    choosebutton11= null;
    choosebutton12 = null;
    screen = 19;
    } else if (choosebutton12.mouse.presses()) {
    choosebutton11.remove();
    choosebutton12.remove();
    choosebutton11 = null;
    choosebutton12 = null;
    screen = 20;
  }
}
// transtionscreen9() function
function transtionscreen9(){
  background(bg12);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text(" You lift your partner onto your back.\nIt’s hard.The cave is steep.\nBut after a long struggle,\nyou see light. You made it—together.",100,140);
  fill(255);
  textAlign(CENTER);
  textSize(21);
  textFont("Nunito");
  text("You earn a gem!", width / 2, 268);
  gembgm.play();
  gembgm.setVolume(0.3);
  
  if (playerCharacter) {
    image(playerCharacter, 250, 280,100, 150);
  }

  if (gemImage1) {
    image(gemImage1, width / 2,350, 50, 50);
  }


  if (!continueButton9) {
    continueButton9= createSprite(width / 2, height - 100, 140, 50);
    continueButton9.shapeColor = color('#341539');
    continueButton9.text = "Continue";
    continueButton9.textSize = 20;
    continueButton9.textColor = "white";
  }
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }

  if (continueButton9 && continueButton9.mouse.presses()) {
    continueButton9.remove();
    continueButton9 = null;
    collectedGems.push(gemImage5);
    screen = 21;
  }
}

// transtionscreen10() function
function transtionscreen10(){
  background(bg12);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("You run ahead, promising to return\nBut you know you won't",100,150);

  image(playerCharacter, 50, height - 200, 100, 150); // Character at bottom left

  if (!continueButton10) {
    continueButton10= createSprite(width / 2, height - 100, 140, 50);
    continueButton10.shapeColor = color('#341539');
    continueButton10.text = "Continue";
    continueButton10.textSize = 20;
    continueButton10.textColor = "white";
  }
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }

  if (continueButton10 && continueButton10.mouse.presses()) {
    continueButton10.remove();
    continueButton10 = null;
    screen = 21;
  }
}
