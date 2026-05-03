import RNFS from 'react-native-fs';

export const cargarArchivosAgrupados =
  async () => {
    try {
      const ruta =
        RNFS.DownloadDirectoryPath +
        '/DescongelApp';

      const lista =
        await RNFS.readDir(ruta);

      const jsons = lista
        .filter(item =>
          item.name.endsWith('.json'),
        )
        .sort(
          (a, b) =>
            Number(b.mtime) -
            Number(a.mtime),
        );

      const agrupados: any = {};

      const nombresMeses = [
        '',
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];

      jsons.forEach(item => {
        const partes =
          item.name.split('_');

        const fecha = partes[0];

        const [, mes, anio] =
          fecha.split('-');

        const clave =
          nombresMeses[
            Number(mes)
          ] +
          ' ' +
          anio;

        if (!agrupados[clave]) {
          agrupados[clave] = [];
        }

        agrupados[clave].push(item);
      });

      return agrupados;
    } catch (error) {
      return {};
    }
  };