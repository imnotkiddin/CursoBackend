import express from "express";
import fs from "fs";

let app = express();
const contenido = fs.readFileSync("./productos.txt", "utf-8");

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido al servidor express</h1>");
  //   res.write('<button href="/visitas">Visitas</button>');
});

app.get("/productos", (req, res) => {
  try {
    res.send(`<h1 style='color: blue'>${contenido}</h1>`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/productosrandom", (req, res) => {
  let productos = contenido.split("\n");
  let producto = productos[Math.floor(Math.random() * productos.length)];
  res.send(`<h1 style='color: blue'>${producto}</h1>`);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
