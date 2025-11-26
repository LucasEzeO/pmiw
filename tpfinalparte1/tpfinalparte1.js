let imagenes = [];
let click = 0;
let texto =[];
let posXbotonMover; //Este boton va ser para mover las pantallas jugables
let posYbotonMover;
let TamBotonMover;
let posXBotonInicial;//Estos son los botones que hacen arrancar el juego
let posYBotonInicial;//Estos son los botones que hacen arrancar el juego
let tamBoton; //Este es el boton del tamaño que yo renombre mal :P
let posXBoton2Creditos;//Estos son los botones que llevan a los creditos
let posYBoton2Creditos; //Estos son los botones que llevan a los creditos
let posXBoton;  //Estos son los botones de decisión
let posYBoton; //Estos son los botones de decisión
let posXBoton2; //Estos son los botones de decisión
let posYBoton2; //Estos son los botones de decisión
let pradera, boton, leon;




function preload() {
  pradera = loadSound("sound/pradera.mp3");
  boton = loadSound("sound/boton.mp3");
  rugidoleon = loadSound("sound/leon.mp3");
  for (let i = 0; i < 23; i++) {
    imagenes[i] = loadImage('img/imagen'+i+'.png');
  }
}
function setup() {
  createCanvas(640, 480);
  tamBoton = 50;
  posXBotonInicial = width / 2 - (tamBoton * 1.5);
  posYBotonInicial = height - 150;
  posXBoton2Creditos = posXBotonInicial;
  posYBoton2Creditos = posYBotonInicial + tamBoton + 20;
 posXbotonMover = width - width / 2 + 90;
posYbotonMover = height / 6
  posXBoton = 61;
  posYBoton = 390;
  posXBoton2 = 383;
  posYBoton2 = 390;
  tamBoton = 50;
  TamBotonMover = 50;
  {
    textSize (24);
    texto [0]='La Sabana';
    texto [1]='Este es el hogar de los Hadley, una familia acomodada que se ha mudado recientemente a esta casa automatizada. La familia esta compuesta del George Hadley, su esposa  Lydia, y sus hijos, Peter y Wendy.';
    texto [2]='Últimamente Peter y Wendy han estado obsesionados en su cuarto de juego con una simulación hiperrealista de una sabana africana con sanguinarios leones';
    texto [3]='Lydia: Estoy preocupada por los niños, George. Esa simulación de la sabana lleva reproduciendose hace semanas, ¿Que deberíamos de hacer?';
    texto [4]='Seguro que no es nada, Lydia. A veces hay que dejar a los niños ser niños. Viendo la resistencia de su esposo, Lydia decide no seguir con el tema y continuar con la cena';
    texto [5]='Días despues, aun dudosa, la señora Hardley, nota que los niños siguen con la proyección de la sabana. -Los niños siguen con esos leones...¿No sería buena idea llamar al señor McClean? Él es psicologo.';
    texto [6]='George lo pensó unos segundos, ¿Podría ser que hubiera algo malo con el cuarto? Pero pronto borró esos pensamientos. Era solo una habitación holográfica';
    texto [7]='-McClean es un hombre ocupado, Lydia, ¿Vos crees que va a tener tiempo para poder ver una habitación llena de leones? Seguro que es solo una fase. Ya se les pasará';
    texto [8]='Sin el apoyo de su esposo, Lydia, se cansa de intentar y decide dejar ser a los niños. Tal vez es como su marido dice y solo necesitan espacio. Peter y Wendy comienzan a separarse mas y mas de sus padres, abstrayendose en su mundo africano';
    texto [9]='George va a investigar y encuentra que la habitación no responde a sus ordenes. Además halla su billetera mordida y escucha gritos, ¿Que debería hacer?';
    texto [10]='Viendo que lo que decía su esposa era verdad, George, decide contactar a su amigo McClean, para que analice la habitación';
    texto [11]='McClean recomienda apagar la habitación e increpa a George por haber dejado que la casa criara a su familia, pues ahora sus hijos usan la habitación de forma hostil, ¿Que debería de hacer George?';
    texto [12]='-¿McClean?¿No crees que exageras?Además, no importa lo que los niños hagan en ese cuarto. Es solo un juego. Rindiendose por la negación de su amigo, McClean decide irse, esperando lo mejor para la familia Hardley.';
    texto [13]='George decide desconectar todos los aparatos de la casa y planea llevarse a la familia a un viaje a Iowa para desconectarlos de la tecnología, lo cual pone de mal humor a Peter y a Wendy';
    texto [14]='George, ¿Podrías conectar la habitación de nuevo? Los niños estan haciendo un escandalo. Por favor. ¿Que debería de hacer George?';
    texto [15]='Esta bien, Lydia, pero tenes que saber que no es lo que recomendó McClean.';
    texto [16]='George decide no hacerle caso a Lydia, y empacan para irse a Iowa de vacaciones con los niños, los cuales cedieron luego de un poco de oposición de su parte.';
    texto [17]='Fue entonces cuando Lydia y George escucharon los gritos de sus hijos desde el cuarto de juego. ¡Mama! ¡Papa! ¡Vengan!';
    texto [18]='Al llegar al cuarto, los niños encierran a George y a Lydia, dejandolos contra los leones. -¡Déjenos salir, niños!';
  }
}
function draw() {
  background(0);
  mostrarImagen(640, 480);
  if (click == 0) {
    fill(0, 0, 0, 90);
mostrarBotonMenu(10, 255);
} else if (click == 1) { 
fill(0, 0, 0, 90); 
rect(-12, 310, 660, 200, 20);  
fill(255); 
textSize(22); 
textAlign(LEFT, TOP); 
text(texto[click], 40, 330, 560, 200); 
} else if (click != 19 && click != 20 && click != 21 && click != 22) { 
fill(0, 0, 0, 90); 
rect(-12, 280, 660, 200, 20); 
fill(255); 
textSize(22); 
textAlign(LEFT, TOP); 
text(texto[click], 40, 300, 560, 200); }  
botonDecisionesDibujar (90, 120, 255);
musica(); 
if (![0,3, 5, 9, 11, 14].includes(click)) {
botonAvanzar(120);
}
}
function mousePressed() {

  if (click === 0) {
    // Menu
    if (overMouse(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton)) {
      click = 1;  // Ir a la imagen uno
      boton.play();
    }

     if (overMouse(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton)) {
      click = 22; // Ir a créditos
      boton.play();
    }
  } else if (click === 3) {
    //Decision de la imagen 3
     if (overMouse(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10)) {
      click = 9; // Ir a investigar
      boton.play();
    }

     if (overMouse(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10)) {
      click = 4; // Ignorar el problema
      boton.play();
    }
  } else if (click === 9) {
    //Decision de la imagen 9
    if (overMouse(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10)) {
      click = 6; // Ignorar el problema
      boton.play();
    }

    if (overMouse(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10)) {
      click = 10; // Llamar a McClean
      boton.play();
    }
  } else if (click === 11) {
    // --- DECISIÓN EN IMAGEN 11 ---
        if (overMouse(posXBoton - 50, posYBoton + 25, tamBoton * 4, tamBoton, 10)) {
      click = 12; // Ignorar el consejo
      boton.play();
    }

       if (overMouse(posXBoton2 - 50, posYBoton2 + 25, tamBoton * 4, tamBoton, 10)) {
      click = 13; // Hacerle caso a McClean
      boton.play();
    }
  } else if (click === 14) {
    // Decisión de la imagen 14
     if (overMouse(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10)) {
      click = 15; // Hacerle caso a Lydia
      boton.play();
    }
 if (overMouse(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10)) {
      click = 16; // No hacerle caso a Lydia
      boton.play();
    }
  } else if (click === 5) {
    // Decision imagen 5
      if (overMouse(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10)) {
      click = 10; // No llamar a McClean
      boton.play();
    }

     if (overMouse(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10)) {
      click = 6; // Llamar a McClean
      boton.play();
    }
  } else if (click == 15) {
    click = 17;
  } else if (click == 19 || click === 21 || click === 20) { //Este else hace que todos los finales vuelvan a cero
    click = 0;
  } else if (click == 8) {
    click = 21;
  } else if (click == 16) {
    click = 20;
  } else {
  // --- SOLO avanzar si se toca el botón Continuar ---
  if (
    mouseX > posXbotonMover &&
    mouseX < posXbotonMover + TamBotonMover * 4 &&
    mouseY > posYbotonMover &&
    mouseY < posYbotonMover + TamBotonMover
  ) {
    if (click < imagenes.length - 1) {
      click++;
    } else {
      click = 0;
    }
    boton.play();
  }
  }
}
function mostrarImagen(x, y) {
  image(imagenes[click], 0, 0, x, y);
  fill(255);
text(mouseX+":"+mouseY, mouseX, mouseY);
}
function botonDecisionesDibujar (trans, trans2, fnegro){
 if (click == 0) {
    // Botones de inicio y créditos
    fill(0, 0, 0, trans);
    rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, 10);
    rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, 10);

    fill(fnegro);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
    text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
  }

  if (click == 3) {
    // Botones de decisión
    fill(0, 0, 0, trans2);
    rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);

    fill (fnegro);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Ir a investigar", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
    text ("Ignorar el problema", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
  }
  if (click == 9) {
    fill(0, 0, 0, trans2);
    rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);

    fill (fnegro);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Ignorar el problema", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
    text ("Llamar a McClean", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
  }
  if (click == 11) {
    fill(0, 0, 0, trans2);
    rect(posXBoton - 50, posYBoton + 25, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2 + 25, tamBoton * 4, tamBoton, 10);

    fill (fnegro);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Ignorar el consejo", posXBoton + (tamBoton), posYBoton + (tamBoton / 2) +25);
    text ("Hacerle caso McClean", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2) +25);
  }
  if (click == 14) {
    fill(0, 0, 0, trans2);
    rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);

    fill (fnegro);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Escuchar a Lydia", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
    text ("Negarse", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
  }
  if (click == 5) {
    fill(0, 0, 0, trans2);
    rect(posXBoton - 50, posYBoton + 25, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2 + 25, tamBoton * 4, tamBoton, 10);

    fill (fnegro);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Llamar a McClean", posXBoton + (tamBoton), posYBoton + (tamBoton / 2) + 25);
    text ("No llamarlo", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2) + 25);
  } 
}
function mostrarBotonMenu (redondez, negro){
rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, redondez);
rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, redondez);
fill (negro);
textSize (20);
textAlign (CENTER, CENTER);
text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
  
}
function musica () {
    
  if ((click === 2 || click === 9 || click === 11 || click === 12 || click === 18 || click === 19) && !pradera.isPlaying()) {
    pradera.loop();
  }
  if (!(click === 2 || click === 9 || click === 11 || click === 12 || click === 18 || click === 19) && pradera.isPlaying()) {
    pradera.stop();
  }
  if (click == 19 && !rugidoleon.isPlaying()) {
    rugidoleon.play();
  }
  if (click != 19 && rugidoleon.isPlaying()) {
    rugidoleon.stop();
  }
}
function botonAvanzar (trans){
  fill(0, 0, 0, trans);
  noStroke();
  rect(posXbotonMover, posYbotonMover, TamBotonMover * 4, TamBotonMover, 10); // ancho x4 igual que los otros botones

  // Texto centrado
  fill(255);
  textSize(19);
  textAlign(CENTER, CENTER);
  text("Continuar", posXbotonMover + (TamBotonMover * 2), posYbotonMover + (TamBotonMover / 2));
}
function overMouse (posX, posY, tamX, tamY){
  return mouseX > posX && mouseX <posX + tamX && mouseY > posY && mouseY <posY + tamY;
}
