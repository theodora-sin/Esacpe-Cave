// Set up the hidden message screen
function hiddenMessageScreen() {
  background(bg13);  // Set a dark background for the hidden message screen
  fill(255);
  textAlign(CENTER);
  textSize(20);
  textFont("Arial");
  text("Hidden Message", width / 2, 40);

  // Display collected gems at the top of the screen with their words
  displayGemsWithWords();

  // Show the hidden message hints (words collected from mini-games and dilemmas)
  displayMessageHints();

  // Input field for the hidden message
  if (!inputBox) {
    inputBox = createInput();
    inputBox.position(width / 2 - 150, height / 2 + 50);
    inputBox.size(300, 30);
    inputBox.attribute("Enter the hidden message here...")
  }

  if (!submitButton) {
    submitButton = createButton('Submit');
    submitButton.position(width / 2 - 50, height / 2 + 90);
    submitButton.size(100, 30);
    submitButton.mousePressed(checkHiddenMessage);
  }

  // Show feedback message
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(feedbackText, width / 2, height - 30);

  // Show continue button after any guess (correct or wrong)
  if (hasGuessed) {
    if (!continueButton) {
      continueButton = createSprite(width / 2, height - 100, 160, 50);
      continueButton.shapeColor = color('#341539');
      continueButton.text = "Continue to End";
      continueButton.textSize = 18;
      continueButton.textColor = "white";
      continueButton.collider = "static";
    }
    if (continueButton && continueButton.mouse.presses()) {
      // Clean up UI elements
      if (continueButton) {
        continueButton.remove();
        continueButton = null;
      }
      if (inputBox) {
        inputBox.remove();
        inputBox = null;
      }
      if (submitButton) {
        submitButton.remove();
        submitButton = null;
      }

      // Reset state
      feedbackText = "";
      userInput = "";
      hasGuessed = false;

      // Go directly to ending message screen
      screen = 22;
      console.log("Going to ending message screen:", screen);
    }
  }
}

// Map gems to their corresponding words
function getGemWord(gemImage) {
  if (gemImage === gemImage1) return "who";
  if (gemImage === gemImage2) return "those";
  if (gemImage === gemImage3) return "moving";
  if (gemImage === gemImage4) return "for";
  if (gemImage === gemImage5) return "keep";
  return "";
}

// Display gems with their corresponding words
function displayGemsWithWords() {
  fill(255);
  textAlign(LEFT);
  textSize(14);
  text("Your Collected Gems & Words:", 20, 80);

  for (let i = 0; i < collectedGems.length; i++) {
    // Display gem
    image(collectedGems[i], 20 + i * 120, 100, 50, 50);

    // Display corresponding word below gem
    let word = getGemWord(collectedGems[i]);
    if (word) {
      fill(255, 255, 0); // Yellow color for words
      textAlign(CENTER);
      textSize(12);
      text(`"${word}"`, 45 + i * 120, 170);
      fill(255); // Reset to white
    }
  }
}

// Display the hints for the hidden message
function displayMessageHints() {
  let hintMessage = "Words from mini-games:\n";

  // Display mini-game word hints (light, forward, waits)
  if (collectedWords.length > 0) {
    for (let i = 0; i < collectedWords.length; i++) {
      hintMessage += `• "${collectedWords[i]}"\n`;
    }
  }
  hintMessage += "\nCombine all words to form the hidden message!";

  fill(255);
  textAlign(LEFT);
  textSize(14);
  text(hintMessage, 20, 200, width - 40, 150);
}

// Check if the hidden message entered by the user is correct
function checkHiddenMessage() {
  if (hasGuessed) return;  // Prevent multiple guesses

  userInput = inputBox.value().trim().toLowerCase();
  
  // Check if the input matches the hidden message
  if (userInput === hiddenMessage.toLowerCase()) {
    feedbackText = "Congratulations! You solved the hidden message!";
    hasGuessed = true;
    // Disable inputs after correct attempt
    inputBox.attribute('disabled', 'true');
    submitButton.attribute('disabled', 'true');
  } else {
    // Show the correct hidden message if the input is wrong
    feedbackText = `Incorrect! The hidden message is:\n"${hiddenMessage}"`;
    // Disable further inputs after wrong attempt
    inputBox.attribute('disabled', 'true');
    submitButton.attribute('disabled', 'true');
    hasGuessed = true;
  }
}

// Function to collect words from mini-games
function collectMiniGameWord(word) {
  if (!collectedWords.includes(word)) {
    collectedWords.push(word);
  }
}

// Function to collect gems from choices in dilemmas
function collectGem(gemId, word) {
  if (!collectedGems.includes(gemId)) {
    collectedGems.push(gemId);
    if (word) {
      collectMiniGameWord(word);  // Reveal the associated word when the gem is collected
    }
  }
}


