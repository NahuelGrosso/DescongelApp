import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { styles } from '../styles/index';

type Props = {
  archivo: any;
  setPantalla: (pantalla: string) => void;
};

export
  const DetalleArchivoScreen = ({ archivo, setPantalla }: Props) => {
  const descargarExcel = async () => {
    try {
      const datos = [
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

      const ws = XLSX.utils.aoa_to_sheet(datos);

      const wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

      const excel = XLSX.write(wb, {
        type: 'base64',
        bookType: 'xlsx',
      });

      const nombre = 'IATF_' + archivo.nombreArchivo.replace('.json', '.xlsx');

      const ruta = RNFS.DownloadDirectoryPath + '/DescongelApp/' + nombre;

      await RNFS.writeFile(ruta, excel, 'base64');

      Alert.alert('Éxito', 'Excel guardado en Descargas/DescongelApp');
    } catch (error) {
      Alert.alert('Error', 'No se pudo generar Excel');
    }
    };
    
    const compartirExcel = async () => {
      try {
        const datos = [
          ['Campo', 'Valor'],
          ['Fecha', archivo.fecha],
          ['Lugar', archivo.lugar],
          ['Establecimiento', archivo.establecimiento],
          ['Rodeo', archivo.rodeo],
          ['Raza', archivo.raza],
          ['Cantidad Vacas', archivo.cantidadVacas],
          ['Toro', archivo.toro],
          ['Inseminador', archivo.inseminador],
          ['Descongelador', archivo.descongelador],
          ['Pajuelas Utilizadas', archivo.pajuelasUtilizadas],
          ['Pajuelas Rotas', archivo.pajuelasRotas],
        ];

        const ws = XLSX.utils.aoa_to_sheet(datos);
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, 'Actividad');

        const excel = XLSX.write(wb, {
          type: 'base64',
          bookType: 'xlsx',
        });

        const nombre = 'IATF-'+ archivo.nombreArchivo.replace('.json', '.xlsx');

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
      <ScrollView
        style={styles.contenedor}
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

        <View style={styles.filaBotonesResumen}>
          <TouchableOpacity
            style={styles.botonMini}
            onPress={() => setPantalla('archivos')}
          >
            <Text style={styles.textoBotonMini}>VOLVER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonMini} onPress={descargarExcel}>
            <Text style={styles.textoBotonMini}>DESCARGAR ⬇️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonMini} onPress={compartirExcel}>
            <Text style={styles.textoBotonMini}>COMPARTIR 📤</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
};
