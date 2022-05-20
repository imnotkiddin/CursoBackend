class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName() {
    return this.nombre + " " + this.apellido;
  }
  addMascota() {
    this.mascotas.push({ nombre: "Felipe", especie: "perro" });
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook() {
    this.libros.push({ titulo: "Testimonios", autor: "Victoria Ocampo" });
  }

  getBookNames() {
    return this.libros.map((book) => book.titulo);
  }
}

const usuario = new Usuario("Bruno", "Zuculini");

usuario.addMascota({ nombre: "Puchini", especie: "perro" });

usuario.addBook({ titulo: "El maestro ignorante", autor: "Jacques Ranciere" });

console.log(usuario.getFullName());
