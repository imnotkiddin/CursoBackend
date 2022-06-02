import fs from "fs";

//Save in a file named fyh.txt the actual date

fs.writeFileSync("./fyh.txt", new Date().toString());

//Read the file fyh.txt and show the content in the console

fs.readFileSync("./fyh.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//include Try Catch

try {
  fs.writeFileSync("./fyh.txt", new Date().toString());
  const datos = fs.readFileSync("./fyh.txt", "utf-8");
  console.log(datos);
} catch (error) {
  throw new Error(`No pudimos ejecutar la accion: ${error}`);
}

//create .txt file with the info in string format

const ruta = "./package.json";
fs.readFile(ruta, "utf-8", (err, data) => {
  if (err) throw new Error(`No pudimos ejecutar la accion: ${err.message}`);
  console.log(data);

  const info = {
    contenidoStr: JSON.stringify(data),
    contenidoObj: JSON.parse(data),
    size: fs.statSync(ruta).size,
  };
  console.log(info);

  fs.writeFile("./info.txt", JSON.stringify(info, null, 2), (err) => {
    if (err) throw new Error(`No pudimos ejecutar la accion: ${err.message}`);
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Lectura y escritura con promises

const prueba = async () => {
  try {
    const contenido = await fs.promises.readFile("./info.txt", "utf-8");
    console.log(contenido);
    const objInfo = JSON.parse(contenido);
    objInfo.contenidoObj.author = "coderhouse";
    await fs.promises.writeFile(
      "./packajes.json.coder",
      JSON.stringify(objInfo, null, 2)
    );
  } catch (error) {
    console.log(error);
  }
};
prueba();
