class MusicBox {
  notas;

  constructor() {
    this.notas = [];
  }

  clear() {
    this.notas = [];
  }
  addNote(note) {
    this.notas.push(note);
  }

  notes() {
    return this.notas.slice();
  }

  play(nota) {
    playing = true;

    if (nota != null) this.addNote(nota); // agrega nota a la partitura

    const repite = this.notes(); // obtiene las notas de la partitura

    console.log("Notas secuencia:" + repite);

    repite.forEach((n, index) => {
      console.log("nota:" + n);

      setTimeout(function () {
        window.playNote(keys.find((k) => k.nota == n).midi);
        pizzarra.agrega(keys.find((k) => k.nota == n).posicion);
        if (index === repite.length - 1) {
          playing = false;
          humano = true;
        }
      }, 1000 * index); // Multiplicar por el índice para crear un intervalo de tiempo creciente
    });
  }
}

class Melodia {
  notas = [];
  original = [];

  constructor() {
    this.notas = this.generaMelodia(); // ["C3", "D3", "E3", "F3"];
    this.original = this.notas.slice(); // copy notes
  }
  reset() {
    console.log("en reset");
    this.notas = this.original.slice(); // restaura la secuencia original
  }

  extrae() {
    if (this.notas.length === 0) return null;

    return this.notas.shift();
  }

  generaNuevaMelodia() {
    console.log("en nueva melodia");
    this.notas = this.generaMelodia(); // ["C3", "D3", "E3", "F3"];
    this.original = this.notas.slice(); // copy notes
  }

  generaMelodia() {  
    const escala = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4"];

    // Definir una progresión de acordes en la escala
    const progresionAcordes = [
      ["C3", "D3", "G3", "A3", "C4", "E4"],
      ["C3", "D3", "G3", "A3", "D4", "E4"],
      ["E3", "F3", "G3", "A3", "B3", "C4"],
      ["C3","D3","F3","G3","C4","E4"],
      ["C3","D3","F3","G3","A3","C4","D4"]
      
       
    ];

    // Función para elegir una nota aleatoria de la escala
    function notaAleatoria(progresion) {
      console.log("progresion: " + JSON.stringify(progresion));

      return progresion[Math.floor(Math.random() * progresion.length)];
    }

    // Crear la melodía
    let melodia = [];

    function indiceAleatorio(max) {
      return Math.floor(Math.random() * max);
    }

    // Función para elegir una nota aleatoria de la progresión

    const laProgresion =  progresionAcordes[Math.floor(Math.random() * progresionAcordes.length)];

    console.log(" progresionAcordes[0]" + laProgresion);

    for (var i = 0; i <= 8; i++) {
      const notaPrincipal = notaAleatoria(laProgresion);
      console.log("Nota principal: " + notaPrincipal);

      melodia.push(notaPrincipal);
      // Agregar una nota de paso
      //   const notaPaso = escala.filter(nota => nota !== notaPrincipal)[Math.floor(Math.random() * 6)];
      //   melodia.push(notaPaso);
    }

    return melodia;
  }
}
