import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';

type Props = {
  fecha: string;

  setHoraInicioActividad: React.Dispatch<React.SetStateAction<string>>;

  setPantalla: (pantalla: string) => void;

  setVacasRestantes: React.Dispatch<React.SetStateAction<number>>;

  lugar: string;
  setLugar: (v: string) => void;

  establecimiento: string;
  setEstablecimiento: (v: string) => void;

  rodeo: string;
  setRodeo: (v: string) => void;

  raza: string;
  setRaza: (v: string) => void;

  cantidadVacas: string;
  setCantidadVacas: (v: string) => void;

  semenDe: string;
  setSemenDe: (v: string) => void;

  toro: string;
  setToro: (v: string) => void;

  inseminador: string;
  setInseminador: (v: string) => void;

  descongelador: string;
  setDescongelador: (v: string) => void;
};

export const FormularioScreen = ({
  fecha,
  setPantalla,
  setHoraInicioActividad,
  setVacasRestantes,
  lugar,
  setLugar,
  establecimiento,
  setEstablecimiento,
  rodeo,
  setRodeo,
  raza,
  setRaza,
  cantidadVacas,
  setCantidadVacas,
  semenDe,
  setSemenDe,
  toro,
  setToro,
  inseminador,
  setInseminador,
  descongelador,
  setDescongelador,
}: Props) => {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>DescongelApp 🐄</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.headerSeccion}>📍 Datos del Rodeo</Text>

        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.datoFijo}>{fecha}</Text>

        <Text style={styles.label}>Lugar:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Ayacucho"
          onChangeText={setLugar}
          value={lugar}
        />

        <Text style={styles.label}>Establecimiento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: La Posta"
          onChangeText={setEstablecimiento}
          value={establecimiento}
        />

        <Text style={styles.label}>Tipo de Rodeo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Vaquillonas"
          onChangeText={setRodeo}
          value={rodeo}
        />

        <Text style={styles.label}>Raza:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Angus"
          onChangeText={setRaza}
          value={raza}
        />

        <Text style={styles.label}>Cantidad de animales:</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={setCantidadVacas}
          value={cantidadVacas}
        />

        <Text style={styles.headerSeccion}>🧬 Datos del Semen</Text>

        <Text style={styles.label}>Semen de:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSemenDe}
          value={semenDe}
        />

        <Text style={styles.label}>Nombre del Toro:</Text>
        <TextInput style={styles.input} onChangeText={setToro} value={toro} />

        <Text style={styles.headerSeccion}>👤 Personal</Text>

        <Text style={styles.label}>Inseminador:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInseminador}
          value={inseminador}
        />

        <Text style={styles.label}>Quién Descongela:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescongelador}
          value={descongelador}
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            setHoraInicioActividad(
              new Date().toLocaleTimeString('es-AR', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            );

            setVacasRestantes(Number(cantidadVacas));


            setPantalla('grafico');

          }}
        >
          <Text style={styles.botonTexto}>A DESCONGELAR</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
};
