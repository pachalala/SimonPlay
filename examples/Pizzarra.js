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
 
 

  constructor(canvasId) {

    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.startX = 50;
    this.startY = 50;
    this.lineSpacing = 20;
    this.lineWidth = 600;
    this.lineHeight = 2;
    this.indice = 0;
    this.notas = [];
    this.ini();
  }

  ini() {
    // Limpiar el canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.indice = 0;

    // Dibujar las líneas del pentagrama
    for (let i = 0; i < 5; i++) {
      const y = this.startY + i * this.lineSpacing;
      this.ctx.fillRect(this.startX, y, this.lineWidth, this.lineHeight);
    }

    // Dibujar los extremos verticales del pentagrama
    this.ctx.fillRect(this.startX, this.startY, this.lineHeight, this.lineSpacing * 4);
    this.ctx.fillRect(this.startX + this.lineWidth, this.startY, this.lineHeight, this.lineSpacing * 4);
  }

  agrega(posicion) {
    console.log("indice, posicion:" + this.indice + "," + posicion);

    this.notas.push(posicion);
    // Dibujar la nota en la posición indicada
    const note = {
      x: ((this.indice * 25 )+ 70),
      y: (posicion * this.lineSpacing) / 2 + this.lineSpacing * 2,
      radius: 5,
    };  

    // dibujar circulo
    this.ctx.beginPath();
    this.ctx.arc(note.x, note.y + 10, note.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "black";
    this.ctx.fill();

    if   (posicion === 10)  {
      this.ctx.beginPath();
      this.ctx.moveTo(note.x - 12, note.y + 10);
      this.ctx.lineTo(note.x + 12, note.y + 10);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
     }

    this.indice++;
  }
}
