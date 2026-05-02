import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import XLSX from 'xlsx';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import { styles } from '../styles/index';

type Props = {
  fecha: string;
  lugar: string;
  establecimiento: string;
  rodeo: string;
  raza: string;
  cantidadVacas: string;
  semenDe: string;
  toro: string;
  inseminador: string;
  descongelador: string;
  horaInicioActividad: string;
  horaFinActividad: string;
  segundosTranscurridos: number;

  pajuelasUtilizadas: number;
  pajuelasRotas: number;

  setModoEdicion: any;

  setPantalla: any;
};

export default function ResumenScreen({
  fecha,
  lugar,
  establecimiento,
  rodeo,
  raza,
  cantidadVacas,
  semenDe,
  toro,
  inseminador,
  descongelador,
  horaInicioActividad,
  horaFinActividad,
  segundosTranscurridos,

  pajuelasUtilizadas,
  pajuelasRotas,
  setPantalla,
  setModoEdicion,
}: Props) {
  const horas = Math.floor(segundosTranscurridos / 3600);
  const minutos = Math.floor((segundosTranscurridos % 3600) / 60);
  const segundos = segundosTranscurridos % 60;

  const duracion = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  const [actividadGuardada, setActividadGuardada] = useState(false);
  
  const datos = {
    fecha,
    lugar,
    establecimiento,
    rodeo,
    raza,
    cantidadVacas,
    semenDe,
    toro,
    inseminador,
    descongelador,
    horaInicioActividad,
    horaFinActividad,
    segundosTranscurridos,
    pajuelasUtilizadas,
    pajuelasRotas,
  };

  const formatearTitulo = (texto: string) => {
    return texto
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, letra => letra.toUpperCase())
      .trim();
  };

  const guardarArchivo = async () => {
    try {
      const carpeta = RNFS.DownloadDirectoryPath + '/DescongelApp';

      const existeCarpeta = await RNFS.exists(carpeta);

      if (!existeCarpeta) {
        await RNFS.mkdir(carpeta);
      }

      const fechaArchivo = fecha.replace(/\//g, '-');

      const establecimientoArchivo = establecimiento.replace(/\s/g, '_');

      const archivos = await RNFS.readDir(carpeta);

      const archivosRelacionados = archivos.filter(item =>
        item.name.startsWith(fechaArchivo + '_' + establecimientoArchivo),
      );

      const numeroRodeo = archivosRelacionados.length + 1;

      const nombreArchivo =
        fechaArchivo +
        '_' +
        establecimientoArchivo +
        '_' +
        numeroRodeo +
        '° Rodeo.json';

      const ruta = carpeta + '/' + nombreArchivo;

      await RNFS.writeFile(ruta, JSON.stringify(datos, null, 2), 'utf8');

      setActividadGuardada(true);

      Alert.alert('Éxito', 'Archivo guardado en Descargas/DescongelApp');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar archivo');
    }
  };

  const datosExcel = [
    ['Campo', 'Valor'],
    ...Object.entries(datos).map(([clave, valor]) => [
      formatearTitulo(clave),
      String(valor),
    ]),
  ];

  const descargarExcel = async () => {
    try {
      if (!actividadGuardada) {
        await guardarArchivo();
      }

      const ws = XLSX.utils.aoa_to_sheet(datosExcel);

      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

      const excel = XLSX.write(wb, {
        type: 'base64',
        bookType: 'xlsx',
      });

      const nombre =
        'IATF_' +
        fecha.replace(/\//g, '-') +
        '_' +
        establecimiento.replace(/\s/g, '_') +
        '.xlsx';

      const ruta = RNFS.DownloadDirectoryPath + '/DescongelApp/' + nombre;

      await RNFS.writeFile(ruta, excel, 'base64');

      setActividadGuardada(true);

      Alert.alert('Éxito', 'Excel guardado en Descargas/DescongelApp');
    } catch (error) {
      Alert.alert('Error', 'No se pudo descargar Excel');
    }
  };

  const compartirExcel = async () => {
    try {
      if (!actividadGuardada) {
        await guardarArchivo();
      }

      const ws = XLSX.utils.aoa_to_sheet(datosExcel);

      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

      const excel = XLSX.write(wb, {
        type: 'base64',
        bookType: 'xlsx',
      });

      const nombre =
        'IATF_' +
        fecha.replace(/\//g, '-') +
        '_' +
        establecimiento.replace(/\s/g, '_') +
        '.xlsx';

      const ruta = RNFS.CachesDirectoryPath + '/' + nombre;

      await RNFS.writeFile(ruta, excel, 'base64');

      await Share.open({
        url: 'file://' + ruta,
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        filename: nombre,
      });
    } catch (error) {}
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>RESUMEN ACTIVIDAD</Text>

      <Text style={styles.label}>Fecha: {fecha}</Text>
      <Text style={styles.label}>Lugar: {lugar}</Text>
      <Text style={styles.label}>Establecimiento: {establecimiento}</Text>
      <Text style={styles.label}>Rodeo: {rodeo}</Text>
      <Text style={styles.label}>Raza: {raza}</Text>
      <Text style={styles.label}>cantidad: {cantidadVacas}</Text>
      <Text style={styles.label}>Semen de: {semenDe}</Text>
      <Text style={styles.label}>Toro: {toro}</Text>

      <Text style={styles.label}>Inseminador: {inseminador}</Text>
      <Text style={styles.label}>Descongelador: {descongelador}</Text>

      <Text style={styles.label}>Hora inicio: {horaInicioActividad}</Text>
      <Text style={styles.label}>Hora fin: {horaFinActividad}</Text>
      <Text style={styles.label}>Duración: {duracion}</Text>

      <Text style={styles.label}>
        Pajuelas utilizadas: {pajuelasUtilizadas}
      </Text>

      <Text style={styles.label}>Pajuelas rotas: {pajuelasRotas}</Text>

      <Text style={styles.label}>
        Total pajuelas utilizadas: {pajuelasUtilizadas + pajuelasRotas}
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          setModoEdicion(true);
          setPantalla('formulario');
        }}
      >
        <Text style={styles.botonTexto}>EDITAR</Text>
      </TouchableOpacity>

      <View style={styles.filaBotonesResumen}>
        <TouchableOpacity style={styles.botonMini} onPress={guardarArchivo}>
          <Text style={styles.textoBotonMini}>GUARDAR 💾</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonMini} onPress={descargarExcel}>
          <Text style={styles.textoBotonMini}>DESCARGAR ⬇️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonMini} onPress={compartirExcel}>
          <Text style={styles.textoBotonMini}>COMPARTIR 📤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filaBotonesFinales}>
        <TouchableOpacity
          style={styles.botonMini}
          onPress={() => setPantalla('inicio')}
        >
          <Text style={styles.textoBotonMini}>🏠 INICIO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonMini}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.textoBotonMini}>SALIR 🚪</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
