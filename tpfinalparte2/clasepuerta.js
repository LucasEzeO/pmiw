class Puerta {
  constructor(jugador, velocidad) {
    this.jugador = jugador;
    this.ancho = jugador.tam + 20;
    this.alto = jugador.alto + 20;
    this.x = width + 50; // empieza fuera de pantalla
    this.y = 320 - 60;   // sobre el suelo
    this.velocidad = velocidad;
    this.visible = false;
    this.ganada = false;
  }
    mostrar() {
    if (!this.visible) return; // si puerta no es visible
    fill(150, 75, 0);
    image(imgPuerta,this.x, this.y - 10, 138,138);
    // mover puerta hacia la izquierda 
    this.x -= this.velocidad;
  }

  activar() {
    this.visible = true; // hace que la puerta aparezca
  }

  Colision() {
    if (!this.visible) return false;
    // colisión con jugador
    if (
      this.jugador.x + this.jugador.tam > this.x &&
      this.jugador.x < this.x + this.ancho &&
      this.jugador.y + this.jugador.alto > this.y &&
      this.jugador.y < this.y + this.alto
    ) {
      this.ganada = true;
      return true
    }
    return false
}
}
