import fs from "fs";

const creaTxt = async () => {
  try {
    await fs.promises.writeFile("./productos.txt", "Contenido\n");
    console.log("Guardado");
  } catch (error) {
    console.log(error);
  }
};
creaTxt();

const prodTxt = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));
const ruta = "./productos.txt";

class Productos {
  constructor(productos) {
    this.prodArray = productos;
  }
  async agregarProducto(producto) {
    const nProd = JSON.stringify(producto, null, 2);
    await fs.promises.appendFile(ruta, nProd, "utf-8");
  }

  async save(objeto) {
    try {
      const data = JSON.parse(await fs.promises.readFile(ruta, "utf-8"));
      data.push(objeto);
      await fs.promises.writeFile(ruta, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(`No pudimos ejecutar la accion: ${error}`);
    }
  }

  async getById(id) {
    try {
      const data = JSON.parse(await fs.promises.readFile(ruta, "utf-8"));
      const prod = data.find((prod) => prod.id === id);
      return prod;
    } catch (error) {
      throw new Error(`No pudimos ejecutar la accion: ${error}`);
    }
  }

  async getAll() {
    try {
      const data = JSON.parse(await fs.promises.readFile(ruta, "utf-8"));
      return data;
    } catch (error) {
      throw new Error(`No pudimos ejecutar la accion: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const data = JSON.parse(await fs.promises.readFile(ruta, "utf-8"));
      const prod = data.find((prod) => prod.id === id);
      data.splice(data.indexOf(prod), 1);
      await fs.promises.writeFile(ruta, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(`No pudimos ejecutar la accion: ${error}`);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(ruta, JSON.stringify([], null, 2));
    } catch (error) {
      throw new Error(`No pudimos ejecutar la accion: ${error}`);
    }
  }
}

// Creates the products using the class Productos
const productos = new Productos(prodTxt);

//Create products using save method
productos.save({
  id: 2,
  nombre: "Laptop",
  precio: "2000",
});

productos.save({
  id: 3,
  nombre: "Teclado",
  precio: "200",
});

productos.save({
  id: 4,
  nombre: "Mouse",
  precio: "100",
});

// gets a product by id
productos.getById(2).then((prod) => console.log(prod));

// // gets all products
// productos.getAll().then(prods => console.log(prods));

// // deletes a product by id
// productos.deleteById(3).then(prods => console.log(prods));

// // deletes all products
// productos.deleteAll().then(prods => console.log(prods));
