import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import XLSX from 'xlsx';

export const eliminarArchivosSeleccionados = async (archivos: string[]) => {
  for (const path of archivos) {
    const existe = await RNFS.exists(path);

    if (existe) {
      await RNFS.unlink(path);
    }
  }
};

export const compartirExcelsSeleccionados = async (archivos: string[]) => {
  try {
    const rutas: string[] = [];

    for (const path of archivos) {
      const texto = await RNFS.readFile(path, 'utf8');

      const datos = JSON.parse(texto);

      const filas = [
        ['Campo', 'Valor'],
        ...Object.entries(datos).map(([clave, valor]) => [
          clave,
          String(valor),
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(filas);

      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

      const excel = XLSX.write(wb, {
        type: 'base64',
        bookType: 'xlsx',
      });

      const nombre =
        path.split('/').pop()?.replace('.json', '.xlsx') || 'archivo.xlsx';

      const rutaTemp = RNFS.CachesDirectoryPath + '/' + nombre;

      await RNFS.writeFile(rutaTemp, excel, 'base64');

      rutas.push('file://' + rutaTemp);
    }

    await Share.open({
      urls: rutas,
    });
  } catch (error) {}
};

{/* 
export const compartirArchivosSeleccionados = async (archivos: string[]) => {
  if (archivos.length === 0) return;

  await Share.open({
    urls: archivos.map(path => 'file://' + path),
  });
};
*/}