class Obstaculos {
  constructor(x, y, ancho, alto, velocidad, tipoObs, img = null) {
    this.x = x;
    this.y = y;
    this.alto = alto;
    this.ancho = ancho;
    this.velocidad = velocidad
      this.tipoObs = tipoObs;
    this.img = img;
    this.obsPasado = false
  }

  dibujarO() {
  
    if (this.tipoObs === "arbusto") {
      image(imgArbusto, this.x, this.y - 25 ,112,148);
    } else if (this.tipoObs === "piedra") {
      image(imgPiedra, this.x, this.y -20, 72, 108);
    } else if (this.tipoObs === "pajaro") {
      image(imgPajaro, this.x, this.y - 60, 90, 73);
    } else if (this.tipoObs === "tronco") {
      image(imgTronco, this.x, this.y - 25,280, 74);
    }
  }
  mover() {
    this.x -= this.velocidad;
  }
  hitBox(jugador) {
    let jugadorX = jugador.x;
    let jugadorY = jugador.y;
    let jugadorAncho = jugador.tam;
    let jugadorAlto = jugador.alto;
    let margen = 5;

    let colisionX = jugadorX + jugadorAncho > this.x + margen &&
      jugadorX < this.x + this.ancho - margen;
    let colisionY = jugadorY + jugadorAlto > this.y + margen &&
      jugadorY < this.y + this.alto - margen;

    if (this.tipoObs === "tronco") {
      if (colisionX && jugadorY + jugadorAlto > this.y && jugador.velY >= 0) {
        jugador.y = this.y - jugadorAlto;
        jugador.velY = 0;
        jugador.enTierra = true;
      }
      return false;
    } else {
      return colisionX && colisionY;
    }
  }
}
