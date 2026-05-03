import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import XLSX from 'xlsx';
import { Alert } from 'react-native';

import { crearNombreExcelDesdeJson } from './crearNombre';

type Props = {
  datosExcel: any[];
  nombreArchivo: string;
};

const generarExcelBase64 = (datosExcel: any[]) => {
  const ws = XLSX.utils.aoa_to_sheet(datosExcel);

  const wb = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

  return XLSX.write(wb, {
    type: 'base64',
    bookType: 'xlsx',
  });
};


export const descargarExcel = async ({
  datosExcel,
  nombreArchivo,
}: Props) => {
  try {
    const excel = generarExcelBase64(datosExcel);

    const nombre = crearNombreExcelDesdeJson(nombreArchivo);

    const ruta = RNFS.DownloadDirectoryPath + '/DescongelApp/' + nombre;

    await RNFS.writeFile(ruta, excel, 'base64');

    Alert.alert('Éxito', 'Excel guardado en Descargas/DescongelApp');
  } catch (error) {
    Alert.alert('Error', 'No se pudo descargar Excel');
  }
};

export const compartirExcel = async ({
  datosExcel,
  nombreArchivo,
}: Props) => {
  try {
    const excel = generarExcelBase64(datosExcel);

    const nombre = crearNombreExcelDesdeJson(nombreArchivo);

    const ruta = RNFS.CachesDirectoryPath + '/' + nombre;

    await RNFS.writeFile(ruta, excel, 'base64');

    await Share.open({
      url: 'file://' + ruta,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      filename: nombre,
    });
  } catch (error) {}
};
