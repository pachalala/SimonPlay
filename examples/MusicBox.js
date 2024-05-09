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

    play(nota ) {
      playing = true;
     
      if (nota != null) this.addNote(nota); // agrega nota a la partitura

      const repite = this.notes(); // obtiene las notas de la partitura

      console.log("Notas secuencia:" + repite);

      repite.forEach((n, index) => {
        console.log("nota:" + n);

        setTimeout(function () {
          window.playNote(keys.find((k) => k.nota == n).midi);

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
      this.notas =  this.generaMelodia();// ["C3", "D3", "E3", "F3"];
      this.original = this.notas.slice(); // copy notes
    }
    reset() {
      this.notas = this.original.slice(); // restaura la secuencia original
    }

    extrae() {
      if (this.notas.length === 0) return null;

      return this.notas.shift();

    }

     generaMelodia(){

      const escala = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4'];

      // Definir una progresión de acordes en la escala
      const progresionAcordes = [['C3', 'E3', 'G3'], ['F3', 'A3', 'C3'], ['G3', 'B3', 'D3'], ['C3', 'E3', 'G3']];
      
      // Función para elegir una nota aleatoria de la escala
      function notaAleatoria() {
          return escala[Math.floor(Math.random() * escala.length)];
      }
      
      // Crear la melodía
      let melodia = [];
      progresionAcordes.forEach(acorde => {
          const notaPrincipal = notaAleatoria(acorde);
          melodia.push(notaPrincipal);
          // Agregar una nota de paso
          const notaPaso = escala.filter(nota => nota !== notaPrincipal)[Math.floor(Math.random() * 6)];
          melodia.push(notaPaso);
      });
    
      return (melodia)
   
    }
     
    
  }