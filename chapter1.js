function dillenma1() {
  background(bg4); 
  fill(255);
  textAlign(LEFT);
  textSize(18);
  textFont("Arial");
  text("Suddenly, the ground shakes and rocks roll\ndown, blocking the way back. The cave is dark, cold,\nand quiet. Liam and Ava begin pointing fingers.\n-It's your fault! - Liam snaps.\n-You need to follow me! - Ava fires back.\nAnger fills the cave and time is slipping away.",width/2 - 200, 130);

  fill(255);
  textAlign(CENTER);
  textSize(26);
  textFont("Nunito");
  text("Decision: Do you calm things down?", width / 2, height/ 2 + 35);


  if (playerCharacter) {
    image(playerCharacter, 30, height - 250, 100, 150);
  }

  // Create decision buttons once
  if (!choosebutton3 && !choosebutton4) {
    choosebutton3 = createSprite(width / 2 - 115, height / 2 + 100, 120, 50);
    choosebutton3.shapeColor = color('#7D7098');
    choosebutton3.text = "Yes";
    choosebutton3.textSize = 22;
    choosebutton3.textColor = "black";

    choosebutton4 = createSprite(width / 2 + 125, height / 2 + 100, 120, 50);
    choosebutton4.shapeColor = color('#7D7098');
    choosebutton4.text = "No";
    choosebutton4.textSize = 22;
    choosebutton4.textColor = "black";
  }

  if (choosebutton3.mouse.presses()) {
    choosebutton3.remove();
    choosebutton4.remove();
    choosebutton3 = null;
    choosebutton4 = null;
    screen = 4;
  } else if (choosebutton4.mouse.presses()) {
    choosebutton3.remove();
    choosebutton4.remove();
    choosebutton3 = null;
    choosebutton4 = null;
    screen = 5;
  }
}

function transtionscreen1() {
  background(bg4);
  fill(255);
  textAlign(LEFT);
  textSize(20);
  textFont("Arial");
  text("You take a deep breath and speak gently.\nLet’s stop arguing. We need to focus if\nwe’re going to get out. They pause, nod\nslowly, and agree to work together.", 100, 110);

  fill(255);
  textAlign(CENTER);
  textAlign(BOLD);
  textSize(21);
  textFont("Nunito");
  text("You earn a gem!", width / 2, 240);
  gembgm.play();

  if (playerCharacter) {
    image(playerCharacter, 250, 280,100, 150);
  }

  if (gemImage1) {
    image(gemImage1, width / 2,350, 50, 50);
  }

  if (!continueButton1) {
    continueButton1 = createSprite(width / 2, height - 100, 140, 50);
    continueButton1.shapeColor = color('#341539');
    continueButton1.text = "Continue";
    continueButton1.textSize = 20;
    continueButton1.textColor = "white";
  }
  for (let i = 0; i < collectedGems.length; i++) {
    image(collectedGems[i], 20 + i * 60, 20, 50, 50);
  }

  if (continueButton1 && continueButton1.mouse.presses()) {
    continueButton1.remove();
    continueButton1 = null;
    collectedGems.push(gemImage1);
    screen = 6;
  }
}

function transtionscreen2() {
  background(bg4);
  fill(255);
  textAlign(LEFT);
  textSize(23);
  textFont("Arial");
  text("They keep arguing, voices bouncing\noff the walls. Precious minutes pass.\nThe cave grows colder—and so\ndoes their trust.",110, 187);

  if (playerCharacter) {
    image(playerCharacter, 50, height - 200, 100, 150);
  }

  if (!continueButton2) {
    continueButton2 = createSprite(width / 2, height - 100, 140, 50);
    continueButton2.shapeColor = color('#341539');
    continueButton2.text = "Continue";
    continueButton2.textSize = 20;
    continueButton2.textColor = "white";
  }


  if (continueButton2 && continueButton2.mouse.presses()) {
    continueButton2.remove();
    continueButton2 = null;
    screen = 6;
  }
}