class Jugador {
  constructor(ancho, alto, gravedad, salto) {
    this.x= 240;
    this.y= 380 - alto;
    this.tam= ancho;
    this.alto = alto;
    this.altoOriginal= alto;
    this.velY= 0;
    this.salto = salto; //fuerza de salto
    this.gravedad = gravedad;
    this.enTierra = true;
    this.piso = 380;
  }



  dibujarJ() {
     image (imgHombre, this.x, this.y, this.tam, this.alto);
  }

  mover() {
    //salto
    if (keyIsDown(UP_ARROW) && this.enTierra) {
      this.velY = -this.salto;
      this.enTierra = false;
    }
    if (this.enTierra) {
      if (keyIsDown(DOWN_ARROW)) {
        this.alto = this.altoOriginal / 2;
      } else {
        this.alto = this.altoOriginal;
      }
    }


    //gravedad
    this.velY += this.gravedad;
    this.y += this.velY;

    if (this.y + this.alto > this.piso) {
      this.y = this.piso - this.alto;
      this.velY = 0;
      this.enTierra = true;
    }
  }
}
