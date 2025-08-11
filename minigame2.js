
// minigame2.js - Maze Navigation Game

function mazegame() {
  background(bg9);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("Maze of Shadows", width / 2 - 20, 100);
    
  textSize(18);
  text("You stumble upon a winding maze filled\nwith traps and dead ends. The\ncave shifts as if it's alive,\ntrying to stop you from escaping.\nGoal: Navigate the maze safely using arrow keys\nwithout touching the red traps.\nReach the exit to unlock the next clue of hope.", width/2 - 30, 160);

  if (playerCharacter) {
    image(minipic2, 500, 450, 100, 150);
    textAlign(CENTER);
  }
//  image(minipic1, 250, height / 2-100 + 100, 100, 150);

  if (!gamecontinueButton2) {
    gamecontinueButton2 = createSprite(width / 2, height / 2 + 140, 120, 40);
    gamecontinueButton2.text = "Start Game";
    gamecontinueButton2.color = "green";
    gamecontinueButton2.textColor = "white";
    gamecontinueButton2.collider = "static";
  }

  if (gamecontinueButton2 && gamecontinueButton2.mouse.presses()) {
    gamecontinueButton2.remove();
    gamecontinueButton2 = null;
    initializeMazeGame();
    screen = "maze_play";
  }
}

function initializeMazeGame() {
  if (player) player.remove();
  if (walls) walls.removeAll();
  if (obstacles) obstacles.removeAll();

  player = new Sprite(300, 110, 15, 15);
  player.color = "blue";
  player.collider = "dynamic";

  walls = new Group();
  walls.color = 'black';
  walls.collider = 'static';
  walls.stroke = "white";
  walls.strokeWeight = 2;

  obstacles = new Group();
  obstacles.color = 'red';
  obstacles.collider = 'static';

  // Maze Walls
  new walls.Sprite(300, 100, 500, 8);
  new walls.Sprite(550, 300, 8, 400);
  new walls.Sprite(350, 500, 300, 8);
  new walls.Sprite(150, 500, 200, 8);
  new walls.Sprite(50, 350, 8, 200);
  new walls.Sprite(50, 200, 8, 200);
  new walls.Sprite(150, 160, 6, 60);
  new walls.Sprite(200, 200, 60, 6);
  new walls.Sprite(320, 160, 6, 80);
  new walls.Sprite(260, 240, 50, 6);
  new walls.Sprite(180, 300, 6, 60);
  new walls.Sprite(240, 340, 80, 6);
  new walls.Sprite(380, 270, 6, 100);
  new walls.Sprite(430, 340, 60, 6);
  new walls.Sprite(300, 420, 6, 80);
  new walls.Sprite(200, 440, 100, 6);
  new walls.Sprite(150, 380, 60, 6);
  new walls.Sprite(460, 200, 60, 6);

  // Obstacles
  new obstacles.Sprite(180, 220, 18, 18);
  new obstacles.Sprite(280, 200, 18, 18);
  new obstacles.Sprite(230, 280, 18, 18);
  new obstacles.Sprite(360, 320, 18, 18);
  new obstacles.Sprite(180, 400, 18, 18);
  new obstacles.Sprite(400, 300, 18, 18);
  new obstacles.Sprite(230, 280, 18, 18);
  new obstacles.Sprite(534, 460, 18, 18);
  new obstacles.Sprite(320, 482, 18, 18);
  new obstacles.Sprite(70, 280, 18, 18);
  new obstacles.Sprite(430, 150, 18, 18);
  new obstacles.Sprite(100, 120, 18, 18);
  new obstacles.Sprite(460, 482, 18, 18);
}

function runMazeGame() {
  background(bg10);
  image(minipic2, 500, 450, 100, 150);
  image(playerCharacter,50,450,100,100);
  fill(0, 255, 0);
  rect(285, 70, 75, 25);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text('START', 320, 90);

  fill(255, 0, 0);
  rect(30, 515, 50, 25);
  fill(255);
  text('END', 60, 535);

  fill(255);
  textAlign(LEFT);
  textSize(12);
  text('Use arrow keys to navigate', 30, height - 10);

  if (player) {
    player.vel.x = 0;
    player.vel.y = 0;

    if (kb.pressing("left") || kb.pressing("ArrowLeft")) player.vel.x = -3;
    if (kb.pressing("right") || kb.pressing("ArrowRight")) player.vel.x = 3;
    if (kb.pressing("up") || kb.pressing("ArrowUp")) player.vel.y = -3;
    if (kb.pressing("down") || kb.pressing("ArrowDown")) player.vel.y = 3;

    player.collide(walls);

    if (player.overlaps(obstacles)) {
      screen = "maze_lose";
    } else if (player.y > 480 && player.x < 80) {
      screen = "maze_win";
    }
  }
}

function drawMazeWinScreen() {
  background(bg9);
  hideMazeElements();

  // Collect the word "forward"
  if (!collectedWords.includes("forward")) {
    collectedWords.push("forward");
  }

  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("CONGRATULATIONS!", width / 2, height / 2 - 60);
  textSize(24);
  text("You Escaped the Maze!", width / 2, height / 2 - 20);
  textSize(18);
  text("Hidden word: forward", width / 2, height / 2 + 20);
  image(minipic2,300, height / 2-100 , 100, 150);

  if (!gamecontinueButton2) {
    gamecontinueButton2 = createSprite(width / 2, height / 2 + 80, 200, 50);
    gamecontinueButton2.text = "Continue ";
    gamecontinueButton2.color = "blue";
    gamecontinueButton2.textColor = "white";
    gamecontinueButton2.collider = "static";
  }

  if (gamecontinueButton2 && gamecontinueButton2.mouse.presses()) {
    cleanupMazeGame();
    screen = 14;
  }
}

function drawMazeLoseScreen() {
  background(bg9);
  hideMazeElements();

  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("GAME OVER ", width / 2, height / 2 - 40);
  textSize(20);
  text("You hit an obstacle!", width / 2, height / 2);
  textSize(16);
  text("Unfortunately, you can't get any hint.", width / 2, height / 2 + 40);
  image(playerCharacter, 50, height - 200, 100, 150);
  image(minipic2,400, height / 2-100 + 100, 100, 150);

  if (!gamecontinueButton2) {
    gamecontinueButton2 = createSprite(width / 2, height / 2 + 100, 200, 50);
    gamecontinueButton2.text = "Continue";
    gamecontinueButton2.color = "orange";
    gamecontinueButton2.textColor = "white";
    gamecontinueButton2.collider = "static";
  }

  if (gamecontinueButton2 && gamecontinueButton2.mouse.presses()) {
    cleanupMazeGame();
    screen = 14;
  }
}

function cleanupMazeGame() {
  if (player) {
    player.remove();
    player = null;
  }
  if (walls) {
    walls.removeAll();
    walls = null;
  }
  if (obstacles) {
    obstacles.removeAll();
    obstacles = null;
  }
  if (gamecontinueButton2) {
    gamecontinueButton2.remove();
    gamecontinueButton2 = null;
  }
}

function hideMazeElements() {
  if (walls) walls.forEach(w => w.visible = false);
  if (obstacles) obstacles.forEach(o => o.visible = false);
  if (player) player.visible = false;
}
