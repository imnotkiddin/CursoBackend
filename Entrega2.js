import fs from "fs";

class Contenedor {
  constructor(nombre, precio, img, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.id = id;
  }

  async save(objeto) {
    try {
      await fs.promises.appendFile(
        "./productos.txt",
        JSON.stringify(objeto) + "\n"
      );
      let objid = 0;
      const sumId = objeto.id === undefined ? objid + 1 : objeto.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
      const objetos = JSON.parse(contenido);
      const objeto = objetos.find((obj) => obj.id === id);
      return objeto;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf-8");

      return contenido;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
      const objetos = JSON.parse(contenido);
      const objeto = objetos.find((obj) => obj.id === id);
      const index = objetos.indexOf(objeto);
      objetos.splice(index, 1);
      await fs.promises.writeFile(
        "./productos.txt",
        JSON.stringify(objetos, null, 2)
      );
      return objeto;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile("./productos.txt", "");
    } catch (error) {
      console.log(error);
    }
  }
}

const contenedor = new Contenedor();

contenedor.save({ nombre: "Coca Cola", precio: 10, img: "coca.jpg" });
contenedor.save({ nombre: "Fanta", precio: 10, img: "fanta.jpg" });
contenedor.save({ nombre: "Sprite", precio: 10, img: "sprite.jpg" });

// contenedor.getById(1);
// contenedor.getById(2);
// contenedor.getAll();
// contenedor.deleteById(1);
// contenedor.deleteAll();
