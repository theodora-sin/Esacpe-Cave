/* INSTRUCTION SCREEN */
function instructionScreen() {
  background(bg11); 
  fill(255);
  textAlign(CENTER);
  textSize(22);
  textFont("Arial");

  text("Instructions", width / 2, 50);
  if (playerCharacter) {
    image(minipic3, 500, 450, 100, 150);
  }
  textSize(16);
  textAlign(LEFT);
  text(
    "As you and your partner push deeper into the cave,\n" +
    "the ground suddenly collapses beneath you.\n" +
    "You're falling fast — but it’s not a free fall.\n" +
    "Jagged stone bars hang in the abyss.\n" +
    "To survive, you must guide yourself through \n" +
    "the shadows and dodge the obstacles.\n" +
    "It’s a test of focus, speed... and hope.\n\n" +
    "Goals:\n" +
    "- Use LEFT and RIGHT arrow keys to move.\n" +
    "- Avoid all the rectangular bars.\n" +
    "- Reach the bottom to unlock the final hidden word.",
    30, 100
  );

  // Display "Start Game" button
  if (!gamecontinueButton3) {
    gamecontinueButton3 = new Sprite(width / 2, height / 2 + 140, 120, 40, "static");
    gamecontinueButton3.text = "Start Game";
    gamecontinueButton3.color = "green";
    gamecontinueButton3.textColor = "white";
  }

  if (gamecontinueButton3 && gamecontinueButton3.mouse.presses()) {
    gamecontinueButton3.remove();
    gamecontinueButton3 = null;
    initMinigame();
  }
}

/* INIT MINIGAME */
function initMinigame() {
  // Create the player
  player1 = new Sprite(200, 20, 30,);
  player1.color = "black";
  image(minipic3, 500, 450 + 100, 100, 150);
//create avioders
  avoider1 = new Sprite(50, 100, 80, 20, "k");
  avoider1.color = "green";
  avoider1.vel.x = 3;

  avoider2 = new Sprite(100, 200, 60, 20, "k");
  avoider2.color = "blue";
  avoider2.vel.x = 5;

  avoider3 = new Sprite(-150, 300, 100, 20, "k");
  avoider3.color = "purple";
  avoider3.vel.x = 2;

  avoider4 = new Sprite(-80, 150, 40, 20, "k");
  avoider4.color = "pink";
  avoider4.vel.x = 3;

  avoider5 = new Sprite(200, 350, 50, 20, "k");
  avoider5.color = "grey";
  avoider5.vel.x = 6;

  avoider6 = new Sprite(-120, 250, 90, 20, "k");
  avoider6.color = "brown";
  avoider6.vel.x = 5;
}

//Program the player to move
function playerMove(){
  background(bg11);
  
  if (kb.pressing("left")) {
    player1.vel.x = -3;
  } else if (kb.pressing("right")) {
    player1.vel.x = 3;
  } else if (kb.pressing("down")) {
    player1.vel.y = 3;
  } else if (kb.pressing("up")) {
    player1.vel.y = -3;
  } else {
    player1.vel.x = 0;
    player1.vel.y = 0;
  }

  //Don't let the player move off the screen
  if (player1.y < 20) {
    player1.y = 20;
  } else if (player1.y > 400) {
    player1.vel.x = 0;
    player1.vel.y = 0;
    youWin();
    return;
  }

  if (player1.x < 20) {
    player1.x = 20;
  } else if (player1.x > 380) {
    player1.x = 380;
  }
}

/* RESET AVOIDERS */
function resetAvoiders() {
  // Reset avoider locations once they reach edge of screen 
  if (avoider1.x > width) {
    avoider1.x = -50;
  } 

  if (avoider2.x > width) {
    avoider2.x = -50;
  } 

  if (avoider3.x > width) {
    avoider3.x = -50;
  }

  if (avoider4.x > width) {
    avoider4.x = -50;
  }

  if (avoider5.x > width) {
    avoider5.x = -50;
  }

  if (avoider6.x > width) {
    avoider6.x = -50;
  }
}

/* CHECK COLLISIONS */
function checkCollisions() {
  //Check if player collides with avoiders
  if (player1.collides(avoider1) || player1.collides(avoider2) || player1.collides(avoider3) || 
      player1.collides(avoider4) || player1.collides(avoider5) || player1.collides(avoider6)) {
    player1.x = 200;
    player1.y = 20;
    screen = "lose";
  } 
}

/* PUSH AVOIDERS OFF SCREEN */
function pushAvoidersOffScreen() {
  if (avoider1) {
    avoider1.vel.x = 0;
    avoider1.x = -100;
  }
  if (avoider2) {
    avoider2.vel.x = 0;
    avoider2.x = -100;
  }
  if (avoider3) {
    avoider3.vel.x = 0;
    avoider3.x = -100;
  }
  if (avoider4) {
    avoider4.vel.x = 0;
    avoider4.x = -100;
  }
  if (avoider5) {
    avoider5.vel.x = 0;
    avoider5.x = -100;
  }
  if (avoider6) {
    avoider6.vel.x = 0;
    avoider6.x = -100;
  }
}

/* WIN CONDITION */
function youWin() {
  pushAvoidersOffScreen();

  // Collect the word "waits"
  if (!collectedWords.includes("waits")) {
    collectedWords.push("waits");
  }

  fill(0, 128, 128);
  textAlign(CENTER);
  textSize(20);
  text('You win! \nHidden word: waits', 200, 200);
  image(playerCharacter, 50, height - 200, 100, 150);
  image(minipic2,400, height / 2-100 + 100, 100, 150);

  if (!gamecontinueButton3) {
    gamecontinueButton3 = new Sprite(width / 2, height / 2 + 40, 140, 40, "static");
    gamecontinueButton3.text = "Continue";
    gamecontinueButton3.color = "green";
  }

  if (gamecontinueButton3 && gamecontinueButton3.mouse.presses()) {
    gamecontinueButton3.remove();
    gamecontinueButton3 = null;
    cleanupMinigame3();
    screen = 18;
  }
}

/* LOSS CONDITION */
function drawLoseScreen() {
  pushAvoidersOffScreen();

  background(bg11);
  fill("red");
  textAlign(LEFT);
  textSize(28);
  text("You lose", 250, height / 2);
  image(playerCharacter, 50, height - 200, 100, 150);
  image(minipic2,400, height / 2-100 + 100, 100, 150);

  if (!gamecontinueButton3) {
    gamecontinueButton3 = new Sprite(width / 2, height / 2 + 40, 140, 40, "static");
    gamecontinueButton3.text = "Continue";
    gamecontinueButton3.color = "green";
  }

  if (gamecontinueButton3 && gamecontinueButton3.mouse.presses()) {
    gamecontinueButton3.remove();
    gamecontinueButton3 = null;
    cleanupMinigame3();
    screen = 18;
  }
}

/* CLEANUP MINIGAME 3 */
function cleanupMinigame3() {
  if (player1) {
    player1.remove();
    player1 = null;
  }
  if (avoider1) {
    avoider1.remove();
    avoider1 = null;
  }
  if (avoider2) {
    avoider2.remove();
    avoider2 = null;
  }
  if (avoider3) {
    avoider3.remove();
    avoider3 = null;
  }
  if (avoider4) {
    avoider4.remove();
    avoider4 = null;
  }
  if (avoider5) {
    avoider5.remove();
    avoider5 = null;
  }
  if (avoider6) {
    avoider6.remove();
    avoider6 = null;
  }
}