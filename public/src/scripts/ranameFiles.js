import fs from "fs";
import path from "path";

const folderPath = "../../../src/components/MyModsLayouts/VerticalLarge";

// const indexFileVertical = "../../../src/components/MyModsLayouts/VerticalLarge/index.js";

// Función para renombrar los archivos
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error leyendo la carpeta:', err);
    return;
  }

  const modFiles = files.filter(file => /^Mod\d+\.jsx$/.test(file)).sort((a, b) => {
    const regex = /^Mod(\d+)\.jsx$/;
    const matchA = a.match(regex);
    const matchB = b.match(regex);
    if (matchA && matchB) {
      return parseInt(matchA[1]) - parseInt(matchB[1]);
    }
  });

  modFiles.forEach((file, index) => {
    const oldPath = path.join(folderPath, file);
    const newFileName = `Mod${index + 1}.jsx`;
    const newPath = path.join(folderPath, newFileName);

    // fs.readFile(newPath, "utf8", (err, data) => {
    //     if (err) { 
    //         console.error('Error leyendo el archivo:', err);
    //         return;
    //     }
    //     console.log(data);
    // })

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error('Error renombrando archivo:', err);
        return;
      }
      console.log(`Renombrado: ${file} -> ${newFileName}`);
    });
  });
});

// fs.readFile(indexFileVertical, "utf8", (err, data) => {
//     if (err) {
//         console.error('Error leyendo el archivo:', err);
//         return;
//     }
//     const modMatches = data.match(/Mod\w*/g);
//     console.log(modMatches);
// })