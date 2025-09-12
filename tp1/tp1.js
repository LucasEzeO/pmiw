//https://youtu.be/tnzm-oNt9IY
let trabajo;
let angulo = 0;
let rotar = false;

function preload() {
  trabajo = loadImage('data/cuadrado.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);
  image(trabajo, 0, 0, 400, 400);

  if (rotar) {
    angulo += 0.01;
  }

  push();
  translate(600, 200);
  rotate(angulo);
  translate(-200, -200);

  dibujarcentro(14, 400);
  dibujarbarras(80);
  dibujarcentrocentro();

  pop();
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    rotar = true;
  }
  if (key === ' ') {
    rotar = false;
    angulo = 0;
  }
}

// y2 viene a representar el 80
function dibujarbarras(y2) {
  let tam = 29;
  noStroke();
  for (let i = 0; i < 12; i++) {
    if (mouseIsPressed) {
      if (i % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
    } else {
      if (i % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
    }
    rect(160, i * tam / 2, y2, 16);             // barra arriba
    rect(i * tam / 2, 160, 16, y2);             // barra izquierda
    rect(160, 385 - i * tam / 2, y2, 16);       // barra de abajo
    rect(385 - i * tam / 2, 160, 16, y2);       // barra derecha
  }
}

// cant representa el 14 = cantidad de cuadrados
// tamañopan representa 400 = mitad del tamaño del canvas
function dibujarcentro(cant, tamañopan) {
  let tam = 29;
  strokeWeight(0);
  for (let i = 0; i < cant; i++) {
    if (mouseIsPressed) {
      if (i % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
    } else {
      if (i % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
    }
    rect(i * tam / 2, i * tam / 2, tamañopan - i * tam, tamañopan - i * tam);
  }
}

function dibujarcentrocentro() {
  let tam = 29;
  strokeWeight(0);
  push();
  translate(173, 172);
  for (let i = 0; i < 2; i++) {
    if (i % 2 === 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(i * tam / 2, i * tam / 2, 55 - i * tam, 55 - i * tam);
  }
  pop();
}
