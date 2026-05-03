import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/index';
import { descargarExcel, compartirExcel } from '../utils/excel';
import { eliminarArchivo } from '../utils/archivos';

type Props = {
  archivo: any;
  setPantalla: (pantalla: string) => void;
};

export const DetalleArchivoScreen = ({ archivo, setPantalla }: Props) => {
  const datosExcel = [
    ['Campo', 'Valor'],
    ['Fecha', archivo.fecha],
    ['Lugar', archivo.lugar],
    ['Establecimiento', archivo.establecimiento],
    ['Rodeo', archivo.rodeo],
    ['Raza', archivo.raza],
    ['Cantidad Vacas', archivo.cantidadVacas],
    ['Semen De', archivo.semenDe],
    ['Toro', archivo.toro],
    ['Inseminador', archivo.inseminador],
    ['Descongelador', archivo.descongelador],
    ['Hora Inicio', archivo.horaInicioActividad],
    ['Hora Fin', archivo.horaFinActividad],
    ['Pajuelas Utilizadas', archivo.pajuelasUtilizadas],
    ['Pajuelas Rotas', archivo.pajuelasRotas],
  ];

  const confirmarEliminar = () => {
    Alert.alert(
      'Eliminar archivo',
      '¿Seguro que querés eliminar esta actividad?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            const ok = await eliminarArchivo(archivo.nombreArchivo);

            if (ok) {
              setPantalla('archivos');
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView
        style={styles.areaScroll}
        contentContainerStyle={styles.scrollDetalle}
      >
        <Text style={styles.titulo}>Detalle de Actividad 📄</Text>

        <View style={styles.tarjeta}>
          <Text style={styles.label}>Fecha:</Text>
          <Text>{archivo.fecha}</Text>

          <Text style={styles.label}>Lugar:</Text>
          <Text>{archivo.lugar}</Text>

          <Text style={styles.label}>Establecimiento:</Text>
          <Text>{archivo.establecimiento}</Text>

          <Text style={styles.label}>Rodeo:</Text>
          <Text>{archivo.rodeo}</Text>

          <Text style={styles.label}>Raza:</Text>
          <Text>{archivo.raza}</Text>

          <Text style={styles.label}>Cantidad Vacas:</Text>
          <Text>{archivo.cantidadVacas}</Text>

          <Text style={styles.label}>Toro:</Text>
          <Text>{archivo.toro}</Text>

          <Text style={styles.label}>Inseminador:</Text>
          <Text>{archivo.inseminador}</Text>

          <Text style={styles.label}>Descongelador:</Text>
          <Text>{archivo.descongelador}</Text>

          <Text style={styles.label}>Hora Inicio:</Text>
          <Text>{archivo.horaInicioActividad}</Text>

          <Text style={styles.label}>Hora Fin:</Text>
          <Text>{archivo.horaFinActividad}</Text>

          <Text style={styles.label}>Pajuelas Utilizadas:</Text>
          <Text>{archivo.pajuelasUtilizadas}</Text>

          <Text style={styles.label}>Pajuelas Rotas:</Text>
          <Text>{archivo.pajuelasRotas}</Text>
        </View>
      </ScrollView>

      <View style={styles.footerBotones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setPantalla('archivos')}
        >
          <Text style={styles.botonTexto}>VOLVER</Text>
        </TouchableOpacity>

        <View style={styles.filaBotonesResumen}>
          <TouchableOpacity
            style={styles.botonMini}
            onPress={confirmarEliminar}
          >
            <Text style={styles.textoBotonMini}>ELIMINAR 🗑️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMini}
            onPress={() =>
              descargarExcel({
                datosExcel,
                nombreArchivo: archivo.nombreArchivo,
              })
            }
          >
            <Text style={styles.textoBotonMini}>DESCARGAR ⬇️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMini}
            onPress={() =>
              compartirExcel({
                datosExcel,
                nombreArchivo: archivo.nombreArchivo,
              })
            }
          >
            <Text style={styles.textoBotonMini}>COMPARTIR 📤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );};
