/* Global Variables */
let collectedGems = [];//array
let screen;// screen
let charImg1, charImg2;
let gemImage1, gemImage2, gemImage3, gemImage4, gemImage5;
let bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14;
let minigame;
let startButton, prefaceButton;
let prefaceShown = false;
let choosebutton1, choosebutton2, choosebutton3, choosebutton4, choosebutton5, choosebutton6, choosebutton7, choosebutton8, choosebutton9, choosebutton10, choosebutton11, choosebutton12;
let continueButton1, continueButton2, continueButton3, continueButton4, continueButton5, continueButton6, continueButton7, continueButton8, continueButton9, continueButton10;
let catcher;//minigame1
let fallingObjects = [];//minigame1
let score = 0;//minigame1
let miniGameStarted = false;//minigame1
let gamecontinueButton1;//minigame1
let leftWall, rightWall;//minigame1
let player, walls, obstacles;//minigame2
let gamecontinueButton2;//minigame2
let playerCharacter = null; // This will store the selected character ("A" for Liam or "B" for Eva),minigame2
let player1;//minigame3
let avoider1, avoider2, avoider3, avoider4, avoider5, avoider6;//minigame3
let gamecontinueButton3;//minigame3
let hiddenMessage = "Light waits for those who keep moving forward";  // Hidden sentence,hidden message
let collectedWords = [];  // Store words collected from mini-games (light, forward, waits),hidden message
let feedbackText = "";    // Feedback for correct/incorrect input,hidden message,hidden message
let inputBox, submitButton, continueButton;//hidden message
let userInput = ""; //hidden message
let hasGuessed = false; // To track whether the user has already guessed, hidden message
let endButton; //ending message
let minipic1,minipic2,minipic3; //minicharacter
let gembgm,bgm;

/* PRELOAD LOADS FILES */
function preload() {
  bg0 = loadImage("assets/background.jpeg");
  bg1 = loadImage("assets/2-download (3).jpeg");
  bg2 = loadImage("assets/3-download (2).jpeg");
  bg3 = loadImage("assets/4-download (4).jpeg");
  bg4 = loadImage("assets/5-download (5).jpeg");
  bg5 = loadImage("assets/6-Download(6).jpeg");
  bg6 = loadImage("assets/7-cave.jpeg");
  bg7 = loadImage("assets/8-download (1).jpeg");
  bg8 = loadImage("assets/9-download (7).jpeg");
  bg9 = loadImage("assets/10-download (6).jpeg");
  bg10 = loadImage("assets/11-cave.jpeg");
  bg11 = loadImage("assets/12-download (8).jpeg");
  bg12 = loadImage("assets/12-download (8).jpeg");
  bg13 = loadImage("assets/13-cave.jpeg");
  bg14 = loadImage("assets/14-cave.jpeg");
  gemImage1 = loadImage("assets/greenperido.png");      // "who"
  gemImage2 = loadImage("assets/Amazonite.png");       // "those"
  gemImage3 = loadImage("assets/rose-quartz.png");     // "moving"
  gemImage4 = loadImage("assets/Snowflake.png");       // "for"
  gemImage5 = loadImage("assets/Sunstone.png");        // "keep"
  charImg1 = loadImage("assets/boy character.png");
  charImg2 = loadImage("assets/girl character.png");
  minigame = loadImage("assets/NAB Split-Faced - Natstone.jpeg");
  bg0 = loadImage("assets/background.jpeg");
  minipic1 = loadImage("assets/bat.png");
  minipic2= loadImage("assets/bear.png");
  minipic3= loadImage("assets/Salamander.png");
  gembgm=loadSound("music/diamond-found-190255.mp3");
  bgm=loadSound("music/magical.mp3");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 600);
  console.log("Setup executed");
  screen = 0;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Start background music on first frame
  function startMusic() {
    if (!isUserInteracted) {
      bgm.loop();
      bgm.setVolume(0.3);
      isUserInteracted = true;
    }
  }

  console.log("Drawing screen:", screen);

  if (screen == 0) {
    startscreen();
  } else if (screen == 1) {
    screen1();
  } else if (screen == 2) {
    screen2();
  } else if (screen == 3) {
    dillenma1();
  } else if (screen == 4) {
    transtionscreen1();
  } else if (screen == 5) {
    transtionscreen2();
  } else if (screen == 6) {
    dillenma2();
  } else if (screen == 7) {
    transtionscreen3();
  } else if (screen == 8) {
    transtionscreen4();
  } else if (screen == 9) {
    if (!miniGameStarted) {
      introScreen();
    } else {
      catchingGame();
    }
  } else if (screen == 100) {
    gameOverScreen();
  } else if (screen == 10) {
    dillenma3();
  } else if (screen == 11) {
    transtionscreen5();
  } else if (screen == 12) {
    transtionscreen6();
  } else if (screen == 13) {
    try {
      mazegame();
    } catch (err) {
      console.error("Error in screen 13 functions:", err);
    }
  } else if (screen == "maze_play") {
    try {
      runMazeGame();
    } catch (err) {
      console.error("Error in maze play:", err);
    }
  } else if (screen == "maze_win") {
    try {
      drawMazeWinScreen();
    } catch (err) {
      console.error("Error in maze win screen:", err);
    }
  } else if (screen == "maze_lose") {
    try {
      drawMazeLoseScreen();
    } catch (err) {
      console.error("Error in maze lose screen:", err);
    }
  } else if (screen == 14) {
    dillenma4();
  } else if (screen == 15) {
    transtionscreen7();
  } else if (screen == 16) {
    transtionscreen8();
  } else if (screen == 17) {
    try {
      if (!player1) {
        instructionScreen();
      } else {
        playerMove();
        resetAvoiders();
        checkCollisions();
      }
    } catch (err) {
      console.error("Error in screen 17 functions:", err);
    }
  } else if (screen == "lose") {
    try {
      drawLoseScreen();
    } catch (err) {
      console.error("Error in lose screen:", err);
    }
  } else if (screen == 18) {
    dillenma5();
  } else if (screen == 19) {
    transtionscreen9();
  } else if (screen == 20) {
    transtionscreen10();
  } else if (screen == 21) {
    try {
      hiddenMessageScreen();
    } catch (err) {
      console.error("Error in screen 21 functions:", err);
    }
  } else if (screen == 22) {
    endmessagescreen();
  } else {
    console.log("Unrecognized screen:", screen);
  }
}

