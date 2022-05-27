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

/*
Agregar Contenido a un archivo

async function agregar(){
    try {
        await fs.promises.appendFile('./ruta/al/archivo', 'Contenido\n');
        console.log('Agregado');
    }
    catch (error) {
        console.log(error);
    }
}
agregar();


Sobreescribir un archivo

async function escribir(){
    try {
        await fs.promises.writeFile('./ruta/al/archivo', 'Contenido\n');
        console.log('Guardado');
    }
    catch (error) {
        console.log(error);
    }
}
escribir();


Renombrar un archivo

async function renombrar(rutaVieja, rutaNueva){
    try {
        await fs.promises.writeFile(rutaVieja, rutaNueva);
        console.log('Renombrado');
    }
    catch (error) {
        console.log(error);
    }
}
renombrar();


array de objetos en clase: jueguetes :["huseo", "papel", "pelota"]

 */
