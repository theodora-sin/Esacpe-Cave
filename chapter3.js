// dillenma3() function
function dillenma3(){
  background(bg8);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  text("As both of you continue walking for hours\nand hours, their legs ache and mentally feel\ndraining. Luckily ahead the cave splits in two.\nThe left path glows red—like fire. The right\npath is pitch black.The red light looks\ndangerous… but your flashlight battery is low.",width/2 - 200,100);
  fill(255);
  textAlign(CENTER);
  textSize(26);
  textFont("Nunito");
  text("Decision: Which path do you take?", width / 2, height/ 2);

  // Show character on bottom left (adjusted position)
  image(playerCharacter, 50, height - 200, 100, 150);

  if (!choosebutton7 && !choosebutton8) {
      // Button 1 (Choice 1)
      choosebutton7 = createSprite(width / 2 - 125, 360, 120, 50);
      choosebutton7.text = "Bright";
    choosebutton7.textSize = 20;
    choosebutton7.textColor = "black";
    choosebutton7.shapeColor = color( '#7D7098');

    // Button 2 (Choice 2)
    choosebutton8 = createSprite(width / 2 + 125, 360, 120, 50);
    choosebutton8.text = "Dark";
    choosebutton8.textSize = 20;
    choosebutton8.textColor = "black";
    choosebutton8.shapeColor = color( '#7D7098');
    }
  
  if (choosebutton7.mouse.presses()) {
    choosebutton7.remove();
    choosebutton8.remove();
    choosebutton7 = null;
    choosebutton8 = null;
    screen = 12;
  } else if (choosebutton8.mouse.presses()) {
    choosebutton7.remove();
    choosebutton8.remove();
    choosebutton7 = null;
    choosebutton8 = null;
    screen = 11;
  }

  // Draw collected gems at the top
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50); // Display collected gems
  }
}

// transtionscreen5() function
function transtionscreen5(){
  background(bg8);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("You trust your flashlight and head into the\ndark. It's cold and silent—but safe. \nAfter some time, you see signs of\na tunnel leading further in.",110,160);
  fill(255);
  textAlign(CENTER);
  textAlign(BOLD);
  textSize(21);
  textFont("Nunito");
  text("You earn a gem!", width / 2, 270);
  gembgm.play();
  gembgm.setVolume(0.3);

  


  image(playerCharacter, 250,280, 100, 150); // Character at bottom left
  image(gemImage3, width / 2, 350, 50, 50); // Gem image

  if (!continueButton5) {
    continueButton5 = createSprite(width / 2, height - 100, 140, 50);
    continueButton5.text = "Continue";
    continueButton5.textSize = 20;
    continueButton5.textColor = "white";
    continueButton5.shapeColor = color('#341539');
    //continueButton5.color = '#341539';
  } //if wrong then delete the lines 60-62 and add continueButton5.color = ...

// Draw collected gems at the top
for (let i = 0; i < collectedGems.length; i++) {
  image(collectedGems[i], 20 + i * 60, 20, 50, 50);
}

if (continueButton5 && continueButton5.mouse.presses()) {
  continueButton5.remove();
  continueButton5 = null;
  collectedGems.push(gemImage3);
  screen = 13;
  }
}

// transtionscreen6() function
function transtionscreen6(){
  background(bg8);
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("You walk toward the glowing path. The\ndeeper you go, the more bizarre\nit becomes. You reach a dead end: an ancient\nstone door with puzzles you\ncan't solve without anyone's help.",110,160);

  fill(255);
  textAlign(CENTER);
  textSize(26);
  textFont("Nunito");
  text("You must turn back.", width/2, 280);


  image(playerCharacter, 50, height - 200, 100, 150); // Character at bottom left

  if (!continueButton6) {
    continueButton6 = createSprite(width / 2, height - 100, 140, 50);
    continueButton6.text = "Continue";
    continueButton6.textSize = 20;
      continueButton6.textColor = "white";
      continueButton6.shapeColor = color('#341539');
      //continueButton6.color = '#341539';
     //if wrong then delete the lines 60-62 and add continueButton6.color = ...
  }

  if (continueButton6 && continueButton6.mouse.presses()) {
    continueButton6.remove();
    continueButton6 = null;
    screen = 13;
    }
}