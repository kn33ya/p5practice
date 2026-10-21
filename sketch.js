// let shaderCanvas;
// let shaderPrimitive;

// function setup() {
//   createCanvas(300, 300, WEBGL);
//   //reducing number of pixels
//   pixelDensity(1);

//   shaderCanvas = createShader(
//     vertex, fragmentCanvas
//   );
//   shaderPrimitive = createShader(
//     vertex, fragmentPrimitive
//   );
// }

// let vertex = `
// precision highp float;

// attribute vec3 aPosition;

// uniform mat4 uModelViewMatrix;
// uniform mat4 uProjectionMatrix;

// void main() {
//   gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
// }
// `;

// let fragmentCanvas =`
// precision highp float;

// void main() {
//   vec3 color = vec3(0.0, 0.0, 1.0);
//   gl_FragColor = vec4(color, 1.0);
// }
// `;

// let fragmentPrimitive =`
// precision highp float;

// void main() {
//   vec3 color = vec3(1.0, 0.0, 0.0);
//   gl_FragColor = vec4(color, 1.0);
// }
// `;

// function draw() {
//   background(220);

//   // Draw a rectangle using the canvas shader
//   shader(shaderPrimitive);

//   const anim = millis() * 0.00025;
//   rotateY(anim);
//   box(120);
// }

//random generated dots with random colors
// let colors = ["#FF6B6B", "#FFE66D", "#4472CA", "#4ECDC4", "#1A535C"];
//  function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background("pink");
// }

// function draw() {
//   ellipse(random(width), random(height), 50, 50);
//   fill(random(colors));

// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
}

function lookAt(ex, ey, mx, my, maxDist) {
  let angle = atan2(my - ey, mx - ex);
  let d = min(maxDist, dist(mx, my, ex, ey));
  ellipse(ex + cos(angle) * d, ey + sin(angle) * d, 80, 80);
}

function draw() {
  background("pink");
  let cx = width / 2;
  let cy = height / 2;
  let s = min(width, height) / 900;

  translate(cx, cy);
  scale(s);
  let mx = (mouseX - cx) / s;
  let my = (mouseY - cy) / s;

  

  // afro
  noStroke();
  fill(30, 20, 15);
  let puff = dist(mouseX, mouseY, cx, cy) < 250 * s ? 20 : 0;
  for (let i = 0; i < 40; i++) {
    let angle = (TWO_PI / 40) * i;
    let wiggle = noise(i, frameCount * 0.02) * 30;
    let r = 300 + wiggle + puff;
    circle(cos(angle) * r, -40 + sin(angle) * r, 120);
  }
  circle(0, -40, 600);

  // head
  fill(117, 76, 34);
  ellipse(0, 0, 350, 400);

  // eyes
  fill("white");
  arc(-100, 0, 80, 80, 0, PI + QUARTER_PI, CHORD);
  arc(85, 0, 80, 80, 0, PI + QUARTER_PI, CHORD);
  fill("black");
  lookAt(-100, 0, mx, my, 20);
  lookAt(85, 0, mx, my, 20);

  // mouth
  fill("#FF967E");
  ellipse(0, 180, 100, 50);

  // nose
  noFill();
  stroke("black");
  strokeWeight(2);
  arc(0, 80, 60, 60, 0, PI + QUARTER_PI, OPEN);

  // glasses
  strokeWeight(4);
  rect(-205, -50, 200, 100);
  rect(5, -50, 200, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} // im having a hard time deploying ;(