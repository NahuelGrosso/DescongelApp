import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

import { crearBaseNombre, crearNombreJson } from './crearNombre';

export const guardarArchivo = async (datos: any) => {
  try {
    const carpeta = RNFS.DownloadDirectoryPath + '/DescongelApp';

    const existeCarpeta = await RNFS.exists(carpeta);

    if (!existeCarpeta) {
      await RNFS.mkdir(carpeta);
    }

    const fechaArchivo = datos.fecha.replace(/\//g, '-');

    const establecimientoArchivo = datos.establecimiento.replace(/\s/g, '_');

    const archivos = await RNFS.readDir(carpeta);

    const relacionados = archivos.filter(item =>
      item.name.startsWith(fechaArchivo + '_' + establecimientoArchivo),
    );

    const numeroRodeo = relacionados.length + 1;

    const baseNombre = crearBaseNombre(
      datos.fecha,
      datos.establecimiento,
      numeroRodeo,
    );

    const nombreArchivo = crearNombreJson(baseNombre);

    const ruta = carpeta + '/' + nombreArchivo;

    await RNFS.writeFile(ruta, JSON.stringify(datos, null, 2), 'utf8');

    Alert.alert('Éxito', 'Archivo guardado en Descargas/DescongelApp');

    return nombreArchivo;
  } catch (error) {
    Alert.alert('Error', 'No se pudo guardar archivo');

    return null;
  }
};

export const eliminarArchivo = async (
  nombreArchivo: string,
) => {
  try {
    const ruta =
      RNFS.DownloadDirectoryPath +
      '/DescongelApp/' +
      nombreArchivo;

    const existe =
      await RNFS.exists(ruta);

    if (existe) {
      await RNFS.unlink(ruta);
      return true;
    }

    return false;
  } catch (error) {
    Alert.alert(
      'Error',
      'No se pudo eliminar archivo',
    );

    return false;
  }
};