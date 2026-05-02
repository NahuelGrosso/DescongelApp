import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RNFS from 'react-native-fs';
import { styles } from '../styles/index';

type Props = {
  setPantalla: (pantalla: string) => void;
  setArchivoCargado: (data: any) => void;
};

export const ArchivosScreen = ({ setPantalla, setArchivoCargado }: Props) => {
  const [grupos, setGrupos] = useState<any>({});
  const [mesAbierto, setMesAbierto] = useState('');
  const cargarArchivos = async () => {
    try {
      const ruta = RNFS.DownloadDirectoryPath + '/DescongelApp';

      const lista = await RNFS.readDir(ruta);

      const jsons = lista
        .filter(item => item.name.endsWith('.json'))
        .sort((a, b) => Number(b.mtime) - Number(a.mtime));
      const agrupados: any = {};

      jsons.forEach(item => {
        const partes = item.name.split('_');
        const fecha = partes[0]; // 30-04-2026

        const [, mes, anio] = fecha.split('-');

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

        const clave = nombresMeses[Number(mes)] + ' ' + anio;

        if (!agrupados[clave]) {
          agrupados[clave] = [];
        }

        agrupados[clave].push(item);
      });

      setGrupos(agrupados);
    } catch (error) {
      setGrupos({});
    }
  };

    const abrirArchivo = async (
        ruta: string,
        nombre:string,
    ) => {
    try {
      const contenido = await RNFS.readFile(ruta, 'utf8');

      const datos = JSON.parse(contenido);

      setArchivoCargado({
        ...datos,
        nombreArchivo: nombre,
      });

      setPantalla('resumenArchivo');
    } catch (error) {}
  };

  useEffect(() => {
    cargarArchivos();
  }, []);

  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Archivos Guardados 🗂️</Text>

      {Object.keys(grupos).map((mes, i) => (
        <View key={i}>
          <TouchableOpacity
            style={styles.tarjetaMes}
            onPress={() => setMesAbierto(mesAbierto === mes ? '' : mes)}
          >
            <Text style={styles.labelMes}>
              {mesAbierto === mes ? '🔽  ' : '▶️  '}
              {mes} ({grupos[mes].length})
            </Text>
          </TouchableOpacity>

          {mesAbierto === mes &&
            grupos[mes].map((archivo: any, j: number) => (
              <TouchableOpacity
                key={j}
                style={styles.tarjeta}
                    onPress={() =>
                        abrirArchivo(
                            archivo.path,
                            archivo.name,
                        )}
              >
                <Text style={styles.label}>
                  {archivo.name
                    .replace('.json', '')
                    .replace('_', ' - ')
                    .replace(/_/g, ' ')}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setPantalla('inicio')}
      >
        <Text style={styles.botonTexto}>VOLVER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
