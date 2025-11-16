class Leon {
  constructor(jugador, obstaculos) {
    this.jugador = jugador;
    this.obstaculos = obstaculos;
    //posicion de inicio
    this.x = 20;
    this.y = 380;
    //tamaño
    this.ancho = 100;
      this.alto = 50;
      //velocidad
      this.velocidad = 2;
    this.gravedad = 0.6;
    this.velY = 0;
    this.salto = -16;
    this.enTierra = true
    this.jugadorFrena = 0
    this.velExtra = 1.5;
  }
  dibujar() {
   image (imgLeon, this.x, this.y, this.ancho, this.alto);
  }
  seguirJugador() {
    //leon sigue al jugador
    let distancia = 100;
    let cenaLeon = this.jugador.x - distancia;

    if (keyIsDown(RIGHT_ARROW)) {
  this.jugadorFrena = 0; // resetear contador
  if (this.x + this.ancho < cenaLeon) {
    this.x += this.velocidad;
  }
} else {
  // jugador está quieto
  this.jugadorFrena++;
   if (this.jugadorFrena > 120) {
    if (this.x + this.ancho < this.jugador.x) {
      this.x += this.velocidad + this.velExtra;
    }
  }
}
    //leon salta obstaculos
    for (let i = 0; i < this.obstaculos.length;i++) {
      let obs = this.obstaculos[i];

      //si es pajaro no salta
      if (obs.tipoObs === "pajaro") {
        continue;
      }
      //queda arriba de los troncos
      if (obs.tipoObs === "tronco") {
        let colisionX = this.x + this.ancho > obs.x && this.x < obs.x + obs.ancho;
        let colisionY = this.y + this.alto <= obs.y && this.y + this.alto + this.velY >= obs.y;

        if (colisionX && colisionY) {
          this.y = obs.y - this.alto;
          this.velY = 0;
          this.enTierra = true;
        }
      }

      let frente = this.x + this.ancho;                
      let distanciaSalto = 100;                       
      let distanciaObs = obs.x - frente;              

      if (distanciaObs > 0 && distanciaObs <= distanciaSalto && this.enTierra) {
        this.velY = this.salto;
        this.enTierra = false;
      }
    }
    this.velY += this.gravedad;
    this.y += this.velY;



    if (this.y + this.alto >= 380) {
      this.y = 380 - this.alto;
      this.velY = 0;
      this.enTierra = true;
    }
    if (this.x + this.ancho >= this.jugador.x) {
      this.jugador.mordido = true;
    }
  }
  hitBox(jugador) {
    return (
      this.x + this.ancho > jugador.x &&
      this.x < jugador.x + jugador.tam &&
      this.y + this.alto > jugador.y &&
      this.y < jugador.y + jugador.alto
      )
  }
}
