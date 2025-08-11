function endmessagescreen(){
  background(bg12);
  fill(255);
  textAlign(LEFT);
  textSize(20);
  textFont("Arial");
  text("Thank you so much for playing our game!\n We hope you had fun playing and \nthat you felt the hope inside the game,\njust like we did.\nWe wanted to make something small but full of hope,\nwhere choices matter and light is always possible\nTo make it more special, we drew all the characters ourselves,by hand!\nStay hopeful. Keep going!\n The creators",15,50);

  if (!endButton) {
    endButton = createSprite(width / 2, height - 100, 140, 50);
    endButton.shapeColor = color('#341539');
    endButton.text = "Return";
    endButton.textSize = 20;
    endButton.textColor = "white";
  }
  
  if (endButton&& endButton.mouse.presses()) {
    endButton.remove();
    endButton = null;
    screen = 0;
  }
}
    