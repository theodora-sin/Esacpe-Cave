function startscreen() {
  background(bg0);
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  textFont("DMSerifDisplay")
  text("Welcome to \nEscape Cave!", width / 2, height / 2 - 100);
  fill("lightyellow");
  textSize(21);
  text("Click the start button below to start the game!", width / 2, height / 2 + 71);

  // Create the start button only once
  if (!startButton) {
    startButton = createSprite(width / 2, height / 2 + 120, 140, 50);
    startButton.shapeColor = color("lightyellow"); 
    startButton.text = "Start";
    startButton.textSize = 24;
    startButton.textColor = "black";
  }
  // Check if mouse is pressed over the button and transition to the next screen
  if (startButton.mouse.presses()) {
    startButton.remove();  // Remove the button once clicked
    startButton = null;    // Nullify the button so it doesn't get reused
    screen = 1;            // Transition to screen 1
  }
}

function screen1() {
  background(bg1);
  fill(255);
  textAlign(CENTER);
  textSize(26);
  text("Choose Your Character", width / 2, 100);

  // Display character images
  image(charImg1, width / 2 - 200, height / 2 - 100, 150, 150);  // Liam
  image(charImg2, width / 2 + 50, height / 2 - 100, 150, 150);   // Ava

  // Create buttons only once
  if (!choosebutton1 && !choosebutton2) {
    choosebutton1 = createSprite(width / 2 - 125, height / 2 + 100, 120, 50);
    choosebutton1.shapeColor = color('#79BAEC');
    choosebutton1.text = "Liam";
    choosebutton1.textSize = 22;
    choosebutton1.textColor = "black";

    choosebutton2 = createSprite(width / 2 + 125, height / 2 + 100, 120, 50);
    choosebutton2.shapeColor = color('#AC94F4');  // "light purple" isn't valid
    choosebutton2.text = "Ava";
    choosebutton2.textSize = 22;
    choosebutton2.textColor = "black";
  }

  // Button click logic for choosing character
  if (choosebutton1.mouse.presses()) {
    playerCharacter = charImg1;  // Liam chosen
    choosebutton1.remove();
    choosebutton2.remove();
    choosebutton1 = null;
    choosebutton2 = null;
    screen = 2;  // Move to screen 2
  } else if (choosebutton2.mouse.presses()) {
    playerCharacter = charImg2;  // Ava chosen
    choosebutton1.remove();
    choosebutton2.remove();
    choosebutton1 = null;
    choosebutton2 = null;
    screen = 2;  // Move to screen 2
  }
}

function screen2() {
  background(bg3);
  fill(255);
  textAlign(CENTER);
  textAlign(BOLD);
  textFont("DM Serif Display");
  textSize(30);
  text("Preface", width / 2 - 13, 60);
  
  textAlign(LEFT);
  textSize(16);
  fill(255);
  textFont("InterTight");
  text("Liam and his older sister Ava set out on a weekend \nhiking trip. While exploring a hidden trail, they \nstumble upon the entrance of a mysterious cave.\nCuriosity gets the better of them, and they cautiously \nstep inside. Suddenly, the ground rumbles. Rocks crash \ndown and block the entrance, trapping them inside.\nWith only a flashlight and each other, they must find\na way out. Your mission is to help your chosen character\nmake wise decisions. If you choose the right path, you’ll\nearn powerful gems. There are also minigames\nthroughout the story. If you win, you’ll earn gems\nand hints towards the final game.\nps: Please use a keyboard to play this game.", width / 2 - 210, height / 2 - 192);

  // Show character images
  image(charImg1, width / 2 - 200, height / 2 + 50, 150, 150);  // Liam
  image(charImg2, width / 2 + 50, height / 2 + 50, 150, 150);   // Ava

  // Create continue button only once
  if (!prefaceButton && !prefaceShown) {
    prefaceButton = createSprite(width / 2, height - 80, 160, 50);
    prefaceButton.shapeColor = color("lightyellow");
    prefaceButton.text = "Continue";
    prefaceButton.textSize = 20;
    prefaceButton.textColor = "black";
  }

    // Button click logic to continue the game
    if (prefaceButton && prefaceButton.mouse.presses()) {
      prefaceButton.remove();  // Remove the button once clicked
      prefaceButton = null;    // Nullify it so it doesn't get reused
      prefaceShown = true;     // Set the flag to true
      screen = 3;              // Transition to screen 3
    }
  }