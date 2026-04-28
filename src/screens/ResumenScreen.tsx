import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

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
  setPantalla,
}: Props) {
  const horas = Math.floor(segundosTranscurridos / 3600);
  const minutos = Math.floor((segundosTranscurridos % 3600) / 60);
  const segundos = segundosTranscurridos % 60;

  const duracion = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

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

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setPantalla('formulario')}
      >
        <Text style={styles.botonTexto}>EDITAR</Text>
      </TouchableOpacity>
    </View>
  );
}
