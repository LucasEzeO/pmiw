//https://youtu.be/aZJGTGkhBK8
let juego;
let imgMenu;
let imgInstrucciones;
let imgPradera;
let imgPerder;
let imgGanar;
let imgCreditos;
let imgPasto;
let imgPajaro;
let imgPiedra;
let imgArbusto;
let imgTronco;
let imgPuerta;
let imgBoton;
let imgHombre;
let imgLeon;
let fondo;
let ganaste;
let rugido;

function preload() {
  fondo = loadSound ("sound/fondo.mp3");
  ganaste = loadSound ("sound/ganaste.mp3");
  rugido = loadSound ("sound/rugido.mp3");
  imgMenu = loadImage("img/Imagen0.png");
  imgInstrucciones = loadImage("img/fondo.png");
  imgPradera = loadImage("img/fondo.png");
  imgPerder = loadImage("img/perder.png");
  imgGanar = loadImage("img/ganar.png");
  imgCreditos = loadImage("img/creditos.png")
    imgPasto= loadImage("img/pasto.png")
    imgPajaro = loadImage("img/pajaro.png")
    imgPiedra = loadImage("img/piedra.png")
    imgArbusto = loadImage("img/arbusto.png")
    imgTronco = loadImage("img/tronco.png")
    imgPuerta = loadImage("img/puerta1.webp")
    imgBoton = loadImage("img/boton.png")
    imgHombre = loadImage("img/hombre.png")
    imgLeon = loadImage("img/leon.png")
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego (imgMenu, imgInstrucciones);
}


function draw() {
  background(0);
  juego.mostrar();
  juego.musica();
}
