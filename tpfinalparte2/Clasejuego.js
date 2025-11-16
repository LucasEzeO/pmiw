class Juego {
  constructor(imgMenu, imgInstrucciones) {
    this.estado = "menu";
    this.menu = "menu";
    this.imgMenu = imgMenu;
    this.imgInstrucciones = imgInstrucciones;
    this.instrucciones = false;
    this.ganaste = false;
      this.creditos = false
    this.botonInicio = {x:
  width/2 - 75, y:
  height/2 + 90, ancho:
  150, alto:
    60
  };
  this.jugador = new Jugador (60, 100, 0.9, 18);
  this.obstaculos = [];
  this.leon = new Leon(this.jugador, this.obstaculos);
  this.puerta = new Puerta(this.jugador, 5);
  this.puntos = 0; // contadora de obstáculos
  this.puntosPuerta = 60;
  this.fondo = fondo;
  this.ganasteSound = ganaste;
  this.rugidoSound = rugido;
}
mostrar() {
  if (this.estado === "menu") {
    this.mostrarMenu(); // solo muestra el menú
  } else if (this.estado === "instrucciones") {
    this.mostrarInstrucciones();
  } else if (this.estado === "jugando") {
    if (imgPradera) {
      image(imgPradera, 0, 0, width, height);
    }
    //suelo
    image(imgPasto, 0, 315, width, 100);
    //crear obstaculos
   if (keyIsDown(RIGHT_ARROW)) {
      if (this.obstaculos.length === 0 ||this.obstaculos[this.obstaculos.length - 1].x < width - random(260, 600)) {
        this.crearObstaculo();
      }
    }
    for (let i = 0; i < this.obstaculos.length; i++) {
      let obTemp = this.obstaculos[i];
      obTemp.mover();
      obTemp.dibujarO();

      if (obTemp.hitBox (this.jugador)) {
        this.perder();
      }
      if (!obTemp.obsPasado && obTemp.x + obTemp.ancho < this.jugador.x && obTemp.tipoObs !== "tronco") {
        obTemp.obsPasado = true; // para no contarlo dos veces
        this.puntos++; // sumar un punto
      }
    }
    fill(255); // color blanco
    textSize(25);
    textAlign(LEFT, TOP);
    text("Puntos: " + this.puntos, 20, 20);
    if (this.puntos >= this.puntosPuerta) {
      this.puerta.activar(); // hace que la puerta sea visible
    }
    //jugador y leon
    this.jugador.dibujarJ();
    this.jugador.mover();
    this.leon.seguirJugador();
    this.leon.dibujar();
    if (this.leon.hitBox(this.jugador)) {
      this.perder();
    }
    // Mostrar la puerta y chequear colisión
    this.puerta.mostrar();
    if (this.puerta.Colision()) {
      this.ganar();
    }
  } else if (this.estado === "perder") {
    this.pantallaPerder();
  } else if (this.estado == "ganar") {
    this.pantallaGanar();
  } else if (this.estado === "creditos") {
    this.pantallaCreditos();
  }
}
crearObstaculo() {
  let tipo = int(random(4));
  let nuevo;

  if (tipo === 0) {
    nuevo = new Obstaculos(680, 290, 60, 90, 5, "arbusto");
  } else if (tipo === 1)
  {
    nuevo = new Obstaculos(680, 320, 40, 60, 5, "piedra");
  } else if (tipo === 2) {
    nuevo = new Obstaculos(680, 260, 40, 30, 5, "pajaro");
  } else if (tipo === 3) {
    nuevo = new Obstaculos(680, 350, 260, 30, 5, "tronco");
  }

  this.obstaculos.push(nuevo);
}
ganar() {
  this.estado = "ganar";
}
perder() {
  this.estado = "perder";
}
pantallaPerder() {
  if (imgPerder) {
    image(imgPerder, 0, 0, width, height);
  } else {
    background(0);
  }
  fill(255, 0, 0);
  textSize(60);
  textAlign(CENTER, CENTER);
  text("Fuiste cena del leon", width / 2, height / 2 - 50);
  //boton menu
let botonMenu = {x:
width/2 - 100, y:
height/2 + 50, ancho:
200, alto:
  60
};
image(imgBoton, botonMenu.x -30, botonMenu.y - 75, 260, 200);
fill(255);
textSize(20);
textAlign(CENTER, CENTER);
text("Volver al menú", botonMenu.x + botonMenu.ancho/2, botonMenu.y + botonMenu.alto/2);
//boton instrucciones
let botonInstrucciones = {x:
width/2 - 100, y:
height/2 + 130, ancho:
200, alto:
60};
image(imgBoton, botonInstrucciones.x -30, botonInstrucciones.y -72, 260, 200);
fill(255);
textSize(20);
textAlign(CENTER, CENTER);
text("Volver a instrucciones", botonInstrucciones.x + botonInstrucciones.ancho/2, botonInstrucciones.y + botonInstrucciones.alto/2);


if (mouseIsPressed) {
  if (mouseX > botonMenu.x && mouseX < botonMenu.x + botonMenu.ancho && mouseY > botonMenu.y && mouseY < botonMenu.y + botonMenu.alto) {
    this.reiniciarJuego(); // reinicia todo el juego
    this.estado = "menu";
  }
  if (mouseX > botonInstrucciones.x && mouseX < botonInstrucciones.x + botonInstrucciones.ancho && mouseY > botonInstrucciones.y && mouseY < botonInstrucciones.y + botonInstrucciones.alto)

  {
    this.reiniciarJuego();
    this.estado = "instrucciones";
  }
}
} pantallaGanar() {
  if (imgGanar) {
    image(imgGanar, 0, 0, width, height);
  } else {
    background(0);
  }
  fill(255, 0, 0);
  textSize(60);
  textAlign(CENTER, CENTER);
  text("Escapaste del leon", width / 2, height / 2 - 50);
  //boton menu
let botonMenu = {x:
width/2 - 100, y:
height/2 + 50, ancho:
200, alto:
  60
};
image(imgBoton, botonMenu.x -30, botonMenu.y - 75, 260, 200);
fill(255);
textSize(20);
textAlign(CENTER, CENTER);
text("Volver al menú", botonMenu.x + botonMenu.ancho/2, botonMenu.y + botonMenu.alto/2);
//boton instrucciones
let botonInstrucciones = {x:
width/2 - 100, y:
height/2 + 130, ancho:
200, alto:
60};
image(imgBoton, botonInstrucciones.x -30, botonInstrucciones.y -72, 260, 200);
fill(255);
textSize(20);
textAlign(CENTER, CENTER);
text("Volver a instrucciones", botonInstrucciones.x + botonInstrucciones.ancho/2, botonInstrucciones.y + botonInstrucciones.alto/2);
if (mouseIsPressed) {
  if (mouseX > botonMenu.x && mouseX < botonMenu.x + botonMenu.ancho && mouseY > botonMenu.y && mouseY < botonMenu.y + botonMenu.alto) {
    this.reiniciarJuego(); // reinicia todo el juego
    this.estado = "menu";
  }
  if (mouseX > botonInstrucciones.x && mouseX < botonInstrucciones.x + botonInstrucciones.ancho && mouseY > botonInstrucciones.y && mouseY < botonInstrucciones.y + botonInstrucciones.alto) {
    this.reiniciarJuego();
    this.estado = "instrucciones";
  }
}
} mostrarMenu() {
  background(0);
  image(this.imgMenu, 0, 0, width, height); // botón
  image(imgBoton, this.botonInicio.x -19, this.botonInicio.y -72, 190, 190);
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("INICIAR", this.botonInicio.x + this.botonInicio.ancho/2, this.botonInicio.y + this.botonInicio.alto/2);
  if (mouseIsPressed) {
    if (mouseX > this.botonInicio.x && mouseX < this.botonInicio.x + this.botonInicio.ancho && mouseY > this.botonInicio.y && mouseY < this.botonInicio.y + this.botonInicio.alto) {
      this.estado = "instrucciones" // cambiar al estado de juego
    }
  }
  image(imgBoton, this.botonInicio.x -19, this.botonInicio.y +1, 190, 190);
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("CRÉDITOS", this.botonInicio.x + this.botonInicio.ancho/2, this.botonInicio.y + 70 + this.botonInicio.alto/2);
  // CLICK
  if (mouseIsPressed) {
    if ( mouseX > this.botonInicio.x && mouseX < this.botonInicio.x + this.botonInicio.ancho && mouseY > this.botonInicio.y + 90 && mouseY < this.botonInicio.y + 90 + this.botonInicio.alto ) {
      this.estado = "creditos";
    }
  }
}
mostrarInstrucciones() {
  background(0);
  image(this.imgInstrucciones, 0, 0, width, height);
  let instrucciones = [
    "Instrucciones:",
    "- Evita los obstáculos",
    "- Flecha ARRIBA: saltar",
    "- Flecha ABAJO: Agacharse",
    "- Flecha DERECHA: avanzar",
    "- LLega a 60 puntos para ganar",
    "Presiona ESPACIO para comenzar"
  ];
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  let yInicial = height / 2 - 80; // empieza un poco arriba
  let espacio = 35; // espacio entre cada línea
  for (let i = 0; i < instrucciones.length; i++) {
    text(instrucciones[i], width/2, yInicial + i * espacio);
  }
  // Al presionar espacio, se inicia el juego
  if (keyIsDown(32)) {
    this.instrucciones = false;
    this.estado = "jugando";
  }
}
pantallaCreditos() {
  if (imgCreditos) {
    image(imgCreditos, 0, 0, width, height);
  } else {
    background(0);
  }
  // BOTÓN volver al menú
let botonVolver = {x:
width/2 - 100, y:
height - 120, ancho:
200, alto:
  60
};
image(imgBoton, botonVolver.x +7, botonVolver.y -72, 190, 190);
fill(255);
textSize(20);
text("Volver al menú", botonVolver.x + botonVolver.ancho/2, botonVolver.y + botonVolver.alto/2);
if (mouseIsPressed) {
  if ( mouseX > botonVolver.x && mouseX < botonVolver.x + botonVolver.ancho && mouseY > botonVolver.y && mouseY < botonVolver.y + botonVolver.alto ) {
    this.estado = "menu";
  }
}
} reiniciarJuego() {
  this.jugador = new Jugador(60, 100, 0.9, 18);
  this.obstaculos = [];
  this.leon = new Leon(this.jugador, this.obstaculos);
  this.puerta = new Puerta(this.jugador, 5);
  this.puntos = 0;
}
musica() {
  // Música de fondo durante el juego
  if (this.estado === "jugando") {
    if (!this.fondo.isPlaying()) {
      this.fondo.loop();
    }
  } else {
    if (this.fondo.isPlaying()) {
      this.fondo.stop();
    }
  }
  // Música de ganar
  if (this.estado === "ganar") {
    if (!this.ganasteSound.isPlaying()) {
      this.ganasteSound.loop();
    }
  } else {
    if (this.ganasteSound.isPlaying()) {
      this.ganasteSound.stop();
    }
  }
  // Sonido de perder
  if (this.estado === "perder") {
    if (!this.rugidoSound.isPlaying()) {
      this.rugidoSound.loop();
    }
  } else {
    if (this.rugidoSound.isPlaying()) {
      this.rugidoSound.stop();
    }
  }
}
}
