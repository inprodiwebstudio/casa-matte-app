import fs from "fs";
import path from "path";


// Configuración
const SOURCE_DIR = path.join(__dirname, '../../../src/components/MyModsLayouts/HorizontalMedium'); // Ruta de archivos originales
const OUTPUT_DIR = path.join(__dirname, '../../../src/components/ModelsOfLayouts/HorizontalMedium'); // Ruta para nuevos archivos

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`📁 Carpeta de salida creada: ${OUTPUT_DIR}`);
}

// Función para modificar solo el componente ImgLayout
function updateImgLayoutComponent(content) {
  // Buscar y reemplazar todas las instancias de ImgLayout
  const updatedContent = content.replace(
    /<ImgLayout[^/>]*\/>/g,
    (imgLayoutTag) => {
      console.log('🔍 Encontrado ImgLayout:', imgLayoutTag);
      
      // Extraer sheetNo e imageNo manteniendo sus valores originales
      const sheetNoMatch = imgLayoutTag.match(/sheetNo=\{([^}]+)\}/);
      const imageNoMatch = imgLayoutTag.match(/imageNo=\{([^}]+)\}/);
      
      const sheetNo = sheetNoMatch ? sheetNoMatch[1].trim() : 'sheetNo';
      const imageNo = imageNoMatch ? imageNoMatch[1].trim() : '0';
      
      // Crear el nuevo ImgLayout solo con las props necesarias
      const newImgLayout = `<ImgLayout
				sheetNo={${sheetNo}}
				imageNo={${imageNo}}
			/>`;
      
      console.log('🔄 Reemplazado por:', newImgLayout);
      return newImgLayout;
    }
  );
  
  return updatedContent;
}

// Función principal
function processFiles() {
  console.log('🔍 Buscando archivos...');
  
  try {
    // Leer todos los archivos en el directorio fuente
    const files = fs.readdirSync(SOURCE_DIR);
    const targetFiles = files.filter(file => 
      file.startsWith('Mod') && (file.endsWith('.jsx') || file.endsWith('.js'))
    );

    console.log(`📁 Encontrados ${targetFiles.length} archivos Mod`);

    let processed = 0;
    let skipped = 0;

    targetFiles.forEach(fileName => {
      const sourcePath = path.join(SOURCE_DIR, fileName);
      const outputPath = path.join(OUTPUT_DIR, fileName);
      
      try {
        const originalContent = fs.readFileSync(sourcePath, 'utf8');
        
        // Verificar si el archivo contiene ImgLayout
        if (/<ImgLayout[^/>]*\/>/.test(originalContent)) {
          console.log(`\n🔄 Procesando: ${fileName}`);
          
          // Modificar solo el componente ImgLayout
          const newContent = updateImgLayoutComponent(originalContent);
          
          // Escribir nuevo archivo
          fs.writeFileSync(outputPath, newContent, 'utf8');
          
          processed++;
          console.log(`✅ Generado: ${fileName}`);
        } else {
          console.log(`⏭️  Saltado (no tiene ImgLayout): ${fileName}`);
          skipped++;
        }
        
      } catch (error) {
        console.error(`❌ Error procesando ${fileName}:`, error.message);
      }
    });

    console.log('\n📊 Resumen:');
    console.log(`✅ Procesados: ${processed} archivos`);
    console.log(`⏭️  Saltados: ${skipped} archivos (sin ImgLayout)`);
    console.log(`📂 Nueva carpeta: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Error leyendo el directorio:', error.message);
  }
}

// Ejecutar el script
processFiles();