import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [pantalla, setPantalla] = useState('formulario'); 
  const [cantidadPajuelas, setCantidadPajuelas] = useState("1");

  const [lugar, setLugar] = useState('');
  const [fecha] = useState(new Date().toLocaleDateString());
  const [establecimiento, setEstablecimiento] = useState('');
  const [rodeo, setRodeo] = useState('');
  const [raza, setRaza] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [semenDe, setSemenDe] = useState('');
  const [toro, setToro] = useState('');
  const [inseminador, setInseminador] = useState('');
  const [descongelador, setDescongelador] = useState('');

  return (
    <View style={{ flex: 1 }}>
      {pantalla === 'formulario' && (
        <ScrollView style={styles.contenedor}>
          <Text style={styles.titulo}>DescongelApp 🐄</Text>
          <View style={styles.tarjeta}>
            <Text style={styles.headerSeccion}>📍 Datos del Rodeo</Text>
            <Text style={styles.label}>Lugar:</Text>
            <TextInput style={styles.input} placeholder="Ej: Ayacucho" onChangeText={setLugar} value={lugar} />
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.datoFijo}>{fecha}</Text>
            <Text style={styles.label}>Establecimiento:</Text>
            <TextInput style={styles.input} placeholder="Ej: La Posta" onChangeText={setEstablecimiento} value={establecimiento} />
            <Text style={styles.label}>Tipo de Rodeo:</Text>
            <TextInput style={styles.input} placeholder="Ej: Vaquillonas" onChangeText={setRodeo} value={rodeo} />
            <Text style={styles.label}>Raza:</Text>
            <TextInput style={styles.input} placeholder="Ej: Angus" onChangeText={setRaza} value={raza} />
            <Text style={styles.label}>Cantidad de animales:</Text>
            <TextInput style={styles.input} placeholder="0" keyboardType="numeric" onChangeText={setCantidad} value={cantidad} />
            <Text style={styles.headerSeccion}>🧬 Datos del Semen</Text>
            <Text style={styles.label}>Semen de:</Text>
            <TextInput style={styles.input} placeholder="Cabaña / Centro" onChangeText={setSemenDe} value={semenDe} />
            <Text style={styles.label}>Nombre del Toro:</Text>
            <TextInput style={styles.input} placeholder="Ej: Don Juan" onChangeText={setToro} value={toro} />
            <Text style={styles.headerSeccion}>👤 Personal</Text>
            <Text style={styles.label}>Inseminador:</Text>
            <TextInput style={styles.input} placeholder="Nombre completo" onChangeText={setInseminador} value={inseminador} />
            <Text style={styles.label}>Quién Descongela:</Text>
            <TextInput style={styles.input} placeholder="Nombre completo" onChangeText={setDescongelador} value={descongelador} />
            <TouchableOpacity style={styles.boton} onPress={() => setPantalla('seleccion')}>
              <Text style={styles.botonTexto}>CONTINUAR</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 60 }} />
        </ScrollView>
      )}

      {pantalla === 'seleccion' && (
        <View style={styles.contenedorCentrado}>
          <Text style={styles.titulo}>Configuración</Text>
          <Text style={styles.subtitulo}>¿Cuántas pajuelas vas a usar?</Text>
          <View style={styles.pickerBorde}>
            <Picker
              selectedValue={cantidadPajuelas}
              onValueChange={(v) => setCantidadPajuelas(v)}
              mode="dropdown"
              style={styles.pickerTexto}
              dropdownIconColor="#1a5276"
            >
              <Picker.Item label="1 Pajuela" value="1" />
              <Picker.Item label="2 Pajuelas" value="2" />
              <Picker.Item label="3 Pajuelas" value="3" />
              <Picker.Item label="4 Pajuelas" value="4" />
            </Picker>
          </View>
          <TouchableOpacity 
            style={styles.botonAdescongelar} 
            onPress={() => Alert.alert("DescongelApp", "Iniciando con " + cantidadPajuelas + " pajuelas")}
          >
            <Text style={styles.botonTexto}>A DESCONGELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPantalla('formulario')}>
            <Text style={styles.textoVolver}>← Volver al formulario</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f2f5', padding: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1a5276', textAlign: 'center', marginTop: 30, marginBottom: 20 },
  tarjeta: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 3 },
  headerSeccion: { fontSize: 18, fontWeight: 'bold', color: '#2980b9', marginTop: 20, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#7f8c8d', marginTop: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 8, fontSize: 18, marginBottom: 10, color: '#333' },
  boton: { backgroundColor: '#27ae60', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 30 },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  datoFijo: { fontSize: 18, fontWeight: 'bold', color: '#27ae60', marginBottom: 10, paddingVertical: 5 },
  contenedorCentrado: { flex: 1, backgroundColor: '#f0f2f5', justifyContent: 'center', padding: 30 },
  subtitulo: { fontSize: 18, color: '#34495e', textAlign: 'center', marginBottom: 25 },
  pickerBorde: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, backgroundColor: '#fff', height: 55, justifyContent: 'center', overflow: 'hidden' },
  pickerTexto: { color: '#333', height: 55, width: '100%' },
  botonAdescongelar: { backgroundColor: '#1a5276', padding: 18, borderRadius: 10, alignItems: 'center', marginTop: 30 },
  textoVolver: { color: '#7f8c8d', marginTop: 25, textAlign: 'center', fontSize: 16 }
});

export default App;
