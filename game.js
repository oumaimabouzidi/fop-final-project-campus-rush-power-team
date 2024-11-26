let player = { 
  x: 300, 
  y: 300, 
  speed: 3, 
  currentImg: null, 
  currentState: 0, // Current animation frame for movement
  direction: "down" // Initial direction
};

// Arrays to store images for each direction
let leftImgs = [];
let rightImgs = [];
let upImgs = [];
let downImgs = [];

function preload() {
  // Load images for each direction and state
  for (let i = 0; i < 3; i++) {
    leftImgs[i] = loadImage(`left_${i}.png`); // Replace with your file names
    rightImgs[i] = loadImage(`right_${i}.png`);
    upImgs[i] = loadImage(`up_${i}.png`);
    downImgs[i] = loadImage(`down_${i}.png`);
  }
}
function setup() {
  createCanvas(1300, 800);
  player.currentImg = downImgs[0];
  
}



function draw() {
  background(255, 130, 0);
   // Display the current image
   image(player.currentImg, player.x, player.y);

   // Handle movement and update frames
   handleMovement();
  
}

function handleMovement() {
  let isMoving = false;

  // Movement and direction handling
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
    player.direction = "left";
    isMoving = true;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
    player.direction = "right";
    isMoving = true;
  } else if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
    player.direction = "up";
    isMoving = true;
  } else if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
    player.direction = "down";
    isMoving = true;
  }

  // Update the current state (animation frame) if moving
  if (isMoving) {
    animate();
  } else {
    // Reset to the first frame when idle
    player.currentState = 0;
  }

  // Update the current image based on direction and state
  switch (player.direction) {
    case "left":
      player.currentImg = leftImgs[player.currentState];
      break;
    case "right":
      player.currentImg = rightImgs[player.currentState];
      break;
    case "up":
      player.currentImg = upImgs[player.currentState];
      break;
    case "down":
      player.currentImg = downImgs[player.currentState];
      break;
  }
}

function animate() {
  // Update the animation frame every few frames
  if (frameCount % 5 === 0) { // Adjust modulus for animation speed
    player.currentState = (player.currentState + 1) % 3; // Cycle through 3 states
  }
}


