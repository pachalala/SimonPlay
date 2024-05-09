class Pizzarra {
  indice = 0;
  notas = [];

  // Configurar el tamaño y la posición del pentagrama
  startX = 50; // Posición inicial en X
  startY = 50; // Posición inicial en Y
  lineSpacing = 20; // Espacio entre líneas
  lineWidth = 600; // Ancho del pentagrama
  lineHeight = 2; // Grosor de las líneas

  ctx = null;

  constructor(elecanvas) {

    this.indice = 0;
    this.notas = [];
    const canvas = document.getElementById(elecanvas);
    this.ctx = canvas.getContext("2d");

    // Dibujar las líneas del pentagrama
    for (let i = 0; i < 5; i++) {
      const y = this.startY + i * this.lineSpacing;
      this.ctx.fillRect(this.startX, y, this.lineWidth, this.lineHeight);
    }

    // Dibujar los extremos verticales del pentagrama
    this.ctx.fillRect(
      this.startX,
      this.startY,
      this.lineHeight,
      this.lineSpacing * 4
    );
    this.ctx.fillRect(
      this.startX + this.lineWidth,
      this.startY,
      this.lineHeight,
      this.lineSpacing * 4
    );
  }

  agrega(posicion) {
    console.log("indice, posicion:" + this.indice + "," + posicion);

    this.notas.push(posicion);
    // Dibujar la nota en la posición indicada
    const note = {
      x: (this.indice * 25),
      y: (posicion * this.lineSpacing) / 2 + this.lineSpacing * 2,
      radius: 5,
    };

    // dibujar circulo
    this.ctx.beginPath();
    this.ctx.arc(note.x, note.y + 10, note.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();

    this.indice++;
  }
}
