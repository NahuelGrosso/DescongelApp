import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView
} from 'react-native';

import { styles } from '../styles/index';
import { descargarExcel, compartirExcel } from '../utils/excel';
import { guardarArchivo } from '../utils/archivos';


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
  const [nombreArchivo, setNombreArchivo] = useState('');

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


  const datosExcel = [
    ['Campo', 'Valor'],
    ...Object.entries(datos).map(([clave, valor]) => [
      formatearTitulo(clave),
      String(valor),
    ]),
  ];

  
  return (
    <View style={styles.contenedor}>
      <ScrollView
        style={styles.areaScroll}
        contentContainerStyle={styles.scrollContenido}
      >
        <Text style={styles.titulo}>RESUMEN ACTIVIDAD</Text>

        <Text style={styles.label}>Fecha: {fecha}</Text>
        <Text style={styles.label}>Lugar: {lugar}</Text>
        <Text style={styles.label}>Establecimiento: {establecimiento}</Text>
        <Text style={styles.label}>Rodeo: {rodeo}</Text>
        <Text style={styles.label}>Raza: {raza}</Text>
        <Text style={styles.label}>Cantidad: {cantidadVacas}</Text>
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
      </ScrollView>

      <View style={styles.footerBotones}>
        <View style={styles.filaBotonesResumen}>
          <TouchableOpacity
            style={styles.botonMini}
            onPress={async () => {
              const nombre = await guardarArchivo(datos);

              if (nombre) {
                setNombreArchivo(nombre);
                setActividadGuardada(true);
              }
            }}
          >
            <Text style={styles.textoBotonMini}>GUARDAR 💾</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMini}
            onPress={async () => {
              let nombre: string | null = nombreArchivo;

              if (!actividadGuardada) {
                nombre = await guardarArchivo(datos);

                if (nombre) {
                  setNombreArchivo(nombre);
                  setActividadGuardada(true);
                }
              }

              if (nombre) {
                descargarExcel({
                  datosExcel,
                  nombreArchivo: nombre,
                });
              }
            }}
          >
            <Text style={styles.textoBotonMini}>DESCARGAR ⬇️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMini}
            onPress={async () => {
              let nombre: string | null = nombreArchivo;

              if (!actividadGuardada) {
                nombre = await guardarArchivo(datos);

                if (nombre) {
                  setNombreArchivo(nombre);
                  setActividadGuardada(true);
                }
              }

              if (nombre) {
                compartirExcel({
                  datosExcel,
                  nombreArchivo: nombre,
                });
              }
            }}
          >
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
    </View>
  );
}
