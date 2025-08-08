// minigame1.js - Gem Catching Game
let blackGemHits = 0; // Track black gem hits globally

function introScreen() {
  background(minigame);
  textAlign(LEFT);
  textSize(18);
  fill(0);
  text("Deep inside the chamber sparkling lights rain\ndown from above. These aren't ordinary\nstones — they're truth gems, fragments of\nmemories that can unlock the cave's secrets.",40,50);
  image(minipic1, 250, height / 2-100 + 100, 100, 150);

  fill(0);
  textAlign(CENTER);
  textSize(19);
  textFont("Nunito");
  text("Goal: Catch the bright-colored gems to\nlight the path ahead.\nAvoid the black gems\nIf you get 0 point or hit 3 white gems, you lose\nReach 5 points to win a hidden word.", width / 2, height/ 2 - 110);

  if (!gamecontinueButton1) {
    gamecontinueButton1 = createSprite(width / 2, height / 2 + 140, 100, 40);
    gamecontinueButton1.text = "Start";
    gamecontinueButton1.color = "green";
    gamecontinueButton1.textColor = "white";
    gamecontinueButton1.collider = "static";
  }

  if (gamecontinueButton1.mouse.presses()) {
    miniGameStarted = true;
    gamecontinueButton1.remove();
    gamecontinueButton1 = null;
    initializeGame();
  }
}

function initializeGame() {
  // Clear any existing objects
  if (catcher) catcher.remove();
  for (let gem of fallingObjects) {
    gem.remove();
  }
  fallingObjects = [];
  score = 0;
  blackGemHits = 0; // Reset black gem hits

  // Create walls
  leftWall = new Sprite(10, height / 2, 20, height);
  leftWall.color = color(100, 100, 100);
  leftWall.collider = "static";

  rightWall = new Sprite(width - 10, height / 2, 20, height);
  rightWall.color = color(100, 100, 100);
  rightWall.collider = "static";

  // Create catcher
  catcher = new Sprite(width / 2, height - 50, 200, 30);
  catcher.color = color(95, 158, 160);
  catcher.collider = "static"; // Static so it doesn't fall due to physics

  // Create falling gems
  for (let i = 0; i < 6; i++) {
    let gem = new Sprite(random(40, width - 40), random(-200, -50), 25, 25);
    let gemTypes = ["green", "pink", "blue", "yellow","black","black"];
    let gemType = gemTypes[Math.floor(Math.random() * gemTypes.length)];

    if (gemType === "green") gem.color = color(0, 255, 0);
    else if (gemType === "pink") gem.color = color(255, 20, 147);
    else if (gemType === "blue") gem.color = color(0, 100, 255);
    else if (gemType === "yellow") gem.color = color(255, 255, 0);
    else gem.color = color(0, 0, 0); // Black gems are now actually black

    gem.vel.y = random(2, 4); // Slower velocity as requested
    gem.vel.x = 0;
    gem.type = gemType;
    gem.collider = "dynamic"; // Change to dynamic for better physics
    gem.hitCounted = false;
    fallingObjects.push(gem);
  }
}

function catchingGame() {
  background(minigame);

  // Initialize game if not already done
  if (!catcher) {
    initializeGame();
    return;
  }

  // Move catcher with arrow keys
  if (kb.pressing("left") || kb.pressing("ArrowLeft")) {
    catcher.x -= 5;
  } else if (kb.pressing("right") || kb.pressing("ArrowRight")) {
    catcher.x += 5;
  }

  // Keep catcher within screen bounds
  catcher.x = constrain(catcher.x, 40, width - 40);

  // Handle falling gems
  for (let i = 0; i < fallingObjects.length; i++) {
    let gem = fallingObjects[i];

    // Reset gem position when it goes off screen
    if (gem.y > height + 50) {
      // Lose point for missing a good gem (not white)
      if (gem.type !== "black") {
        score--;
      }

      gem.y = random(-100, -50);
      gem.x = random(40, width - 40);
      gem.vel.y = random(2,4); // Slower velocity
      gem.hitCounted = false;
    }

    // Check collision with catcher
    if (gem.colliding(catcher)) {
      if (gem.type === "black") {
        // Hit black gem - increment black gem counter
        if (!gem.hitCounted) {
          blackGemHits++;
          gem.hitCounted = true;

          // Check if hit 3 black gems
          if (blackGemHits >= 3) {
            cleanupGame();
            screen = 100; // Game over screen
            return;
          }
        }
      } else {
        // Caught good gem
        if (!gem.hitCounted) {
          score++;
          gem.hitCounted = true;
        }
      }

      // Reset gem position after collision
      gem.y = random(-100, -50);
      gem.x = random(40, width - 40);
      gem.vel.y = random(2,4); // Slower velocity
      gem.hitCounted = false;
    }
  }

  // Display score and instructions
  fill(0);
  textAlign(LEFT);
  textSize(18);
  text("Score: " + score, 30, 30);
  text("black gems hit: " + blackGemHits + "/3", 30, 55);
  text("Use arrow keys to move", 30, 70);

  // Show character on bottom left (adjusted position)
  image(playerCharacter, 50, height - 200, 100, 150);
  image(minipic1, 450, height -200 , 100, 150);
  // Check lose condition (score goes negative or 3 black gems)
  if (score < 0 || blackGemHits >= 3) {
    cleanupGame();
    screen = 100; // Game over screen
    return;
  }

  // Check win condition
  if (score >= 5) {
    // Stop the game
    for (let gem of fallingObjects) {
      gem.vel.x = 0;
      gem.vel.y = 0;
    }

    // Collect the word "light"
    if (!collectedWords.includes("Light")) {
      collectedWords.push("Light");
    }

    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(24);
    text("You Win! Hidden word: Light", width / 2, height / 2 - 50);

    if (!gamecontinueButton1) {
      gamecontinueButton1 = createSprite(width / 2, height / 2 + 40, 140, 50);
      gamecontinueButton1.text = "Continue";
      gamecontinueButton1.color = "green";
      gamecontinueButton1.textColor = "black";
      gamecontinueButton1.collider = "static";
    }

    if (gamecontinueButton1.mouse.presses()) {
      cleanupGame();
      screen = 10; // Go to chapter 3
    }
  }
}

function gameOverScreen() {
  background(minigame);
  fill("red");
  textAlign(CENTER);
  textSize(30);
  text("You Lost!", width / 2, height / 2 - 30);
  textSize(16);
  text("Unfortunately, you can't get any hints.", width / 2, height / 2 + 10);
  image(minipic1, 250, height / 2 + 140, 100, 150);

  if (!gamecontinueButton1) {
    gamecontinueButton1 = createSprite(width / 2, height / 2 + 60, 140, 50);
    gamecontinueButton1.text = "Continue";
    gamecontinueButton1.color = "blue";
    gamecontinueButton1.textColor = "black";
    gamecontinueButton1.collider = "static";
  }

  if (gamecontinueButton1.mouse.presses()) {
    cleanupGame();
    screen = 10; // Go to chapter 3
  }
}

function cleanupGame() {
  miniGameStarted = false;

  if (catcher) {
    catcher.remove();
    catcher = null;
  }

  for (let gem of fallingObjects) {
    gem.remove();
  }
  fallingObjects = [];

  if (gamecontinueButton1) {
    gamecontinueButton1.remove();
    gamecontinueButton1 = null;
  }

  if (leftWall) {
    leftWall.remove();
    leftWall = null;
  }
  
  if (rightWall) {
    rightWall.remove();
    rightWall = null;
  }

  score = 0;
  blackGemHits = 0;
}
