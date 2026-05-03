import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RNFS from 'react-native-fs';
import { styles } from '../styles/index';
import { cargarArchivosAgrupados } from '../utils/listadoArchivos';
import {
  toggleSeleccionArchivo,
  limpiarSeleccion,
  estaSeleccionado,
} from '../utils/seleccionArchivos';

import {
  eliminarArchivosSeleccionados,
  compartirExcelsSeleccionados,
} from '../utils/accionesArchivos';

type Props = {
  setPantalla: (pantalla: string) => void;
  setArchivoCargado: (data: any) => void;
};

export const ArchivosScreen = ({ setPantalla, setArchivoCargado }: Props) => {
  const [grupos, setGrupos] = useState<any>({});
  const [mesAbierto, setMesAbierto] = useState('');

  const [modoSeleccion, setModoSeleccion] = useState(false);
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const abrirArchivo = async (ruta: string, nombre: string) => {
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

 const cargar = async () => {
   const datos = await cargarArchivosAgrupados();

   setGrupos(datos);
 };

 useEffect(() => {
   cargar();
 }, []);

  const cancelarSeleccion = () => {
    setModoSeleccion(false);
    setSeleccionados(limpiarSeleccion());
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView
        style={styles.areaScroll}
        contentContainerStyle={styles.scrollDetalle}
      >
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
                  onPress={() => {
                    if (modoSeleccion) {
                      setSeleccionados(
                        toggleSeleccionArchivo(seleccionados, archivo.path),
                      );
                    } else {
                      abrirArchivo(archivo.path, archivo.name);
                    }
                  }}
                >
                  <View style={styles.filaArchivo}>
                    <Text style={styles.label}>
                      {archivo.name
                        .replace('.json', '')
                        .replace('_', ' - ')
                        .replace(/_/g, ' ')}
                    </Text>

                    {modoSeleccion && (
                      <Text style={styles.checkbox}>
                        {estaSeleccionado(seleccionados, archivo.path)
                          ? '☑️'
                          : '⬜'}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footerBotones}>
        {!modoSeleccion ? (
          <View style={styles.filaBotonesResumen}>
            <TouchableOpacity
              style={styles.botonMini}
              onPress={() => setPantalla('inicio')}
            >
              <Text style={styles.textoBotonMini}>VOLVER</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botonMini}
              onPress={() => setModoSeleccion(true)}
            >
              <Text style={styles.textoBotonMini}>SELECCIONAR</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.filaBotonesResumen}>
            <TouchableOpacity
              style={styles.botonMini}
              onPress={async () => {
                await eliminarArchivosSeleccionados(seleccionados);

                await cargar();

                cancelarSeleccion();
              }}
            >
              <Text style={styles.textoBotonMini}>ELIMINAR 🗑️</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.botonMini}
              onPress={async () => {
                await compartirExcelsSeleccionados(seleccionados);

                cancelarSeleccion();
              }}
            >
              <Text style={styles.textoBotonMini}>COMPARTIR 📤</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botonMini}
              onPress={cancelarSeleccion}
            >
              <Text style={styles.textoBotonMini}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
