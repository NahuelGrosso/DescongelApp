import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Vibration,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Svg, { Circle, Line, G, Path, Text as SvgText } from 'react-native-svg';
import { FormularioScreen } from './screens/FormularioScreen';
import { GraficoScreen } from './screens/GraficoScreen';
import ResumenScreen from './screens/ResumenScreen';
import { styles } from './styles';

import Sound from 'react-native-sound';

const App = () => {
  const [pantalla, setPantalla] = useState<any>('formulario');
  const fecha = new Date().toLocaleDateString('es-AR');

  const [lugar, setLugar] = useState('');
  const [establecimiento, setEstablecimiento] = useState('');
  const [rodeo, setRodeo] = useState('');
  const [raza, setRaza] = useState('');
  const [cantidadVacas, setCantidadVacas] = useState('');
  const [semenDe, setSemenDe] = useState('');
  const [toro, setToro] = useState('');
  const [inseminador, setInseminador] = useState('');
  const [descongelador, setDescongelador] = useState('');

  const [vacasRestantes, setVacasRestantes] = useState(0);
  const [pajuelasRotas, setPajuelasRotas] = useState(0);

  //hora inicio, fin y cronometro
  const [horaInicioActividad, setHoraInicioActividad] = useState('');
  const [horaFinActividad, setHoraFinActividad] = useState('');
  const [segundosTranscurridos, setSegundosTranscurridos] = useState(0);
  const [cronometroPausado, setCronometroPausado] = useState(false);

  //
  // Estado para controlar las 4 porciones: { activa: bool, segundos: 40, listo: bool }
  const [pajuelas, setPajuelas] = useState([
    { id: 0, activa: false, segundos: 40, listo: false },
    { id: 1, activa: false, segundos: 40, listo: false },
    { id: 2, activa: false, segundos: 40, listo: false },
    { id: 3, activa: false, segundos: 40, listo: false },
  ]);

  // --- MOTOR DEL TIEMPO (Cronómetro de Sesión y Pajuelas) ---
  useEffect(() => {
    let intervalo: any = null;

    if (pantalla === 'grafico') {
      intervalo = setInterval(() => {
        // 🟢 Cronómetro general (respeta pausa)
        if (!cronometroPausado) {
          setSegundosTranscurridos(prev => prev + 1);
        }

        // 🔵 Pajuelas (SIEMPRE corren)
        setPajuelas(prev =>
          prev.map(p => {
            if (!p.activa) return p;
            const nuevoTiempo = p.segundos - 1;

            if (nuevoTiempo === 0) {
              Vibration.vibrate(500); // Tu vibración de siempre

              const beep = new Sound('beep', Sound.MAIN_BUNDLE, error => {
                if (!error) {
                  beep.play(() => beep.release());
                }
              });
            }

            return { ...p, segundos: nuevoTiempo, listo: nuevoTiempo <= 0 };
          }),
        );
      }, 1000);
    }

    return () => clearInterval(intervalo); // Limpia el motor al salir
  }, [pantalla, cronometroPausado]);

  ////
  const manejarToquePajuela = (index: any) => {
    const nuevas = [...pajuelas];
    const p = nuevas[index];

    if (!p.activa) {
      // 1. Toque Inicial: Se pone Celeste y arranca 40s
      nuevas[index] = {
        ...p,
        activa: true,
        segundos: 40,
        listo: false
      };
    } else {
      if (p.listo) {
        setVacasRestantes(prev =>Math.max(prev - 1, 0))
      }
      // 3. Extracción: Si ya estaba activa, un toque la limpia (Vuelve a Negro)
      nuevas[index] = {
        ...p,
        activa: false,
        segundos: 40,
        listo: false
      };
    }
    setPajuelas(nuevas);
  };
  ////
  return (
    <View style={{ flex: 1 }}>
      {pantalla === 'formulario' && (
        <FormularioScreen
          setPantalla={setPantalla}
          setHoraInicioActividad={setHoraInicioActividad}
          setVacasRestantes={setVacasRestantes}
          fecha={fecha}
          lugar={lugar}
          setLugar={setLugar}
          establecimiento={establecimiento}
          setEstablecimiento={setEstablecimiento}
          rodeo={rodeo}
          setRodeo={setRodeo}
          raza={raza}
          setRaza={setRaza}
          cantidadVacas={cantidadVacas}
          setCantidadVacas={setCantidadVacas}
          semenDe={semenDe}
          setSemenDe={setSemenDe}
          toro={toro}
          setToro={setToro}
          inseminador={inseminador}
          setInseminador={setInseminador}
          descongelador={descongelador}
          setDescongelador={setDescongelador}
        />
      )}

      {pantalla === 'grafico' && (
        <GraficoScreen
          vacasRestantes={vacasRestantes}
          setHoraFinActividad={setHoraFinActividad}
          pajuelas={pajuelas}
          manejarToquePajuela={manejarToquePajuela}
          segundosTranscurridos={segundosTranscurridos}
          cronometroPausado={cronometroPausado}
          setCronometroPausado={setCronometroPausado}
          setPantalla={setPantalla}
          pajuelasRotas={pajuelasRotas}
          setPajuelasRotas={setPajuelasRotas}
        />
      )}

      {pantalla === 'resumen' && (
        <ResumenScreen
          fecha={fecha}
          lugar={lugar}
          establecimiento={establecimiento}
          rodeo={rodeo}
          raza={raza}
          cantidadVacas={cantidadVacas}
          semenDe={semenDe}
          toro={toro}
          inseminador={inseminador}
          descongelador={descongelador}
          horaInicioActividad={horaInicioActividad}
          horaFinActividad={horaFinActividad}
          segundosTranscurridos={segundosTranscurridos}
          setPantalla={setPantalla}
        />
      )}
    </View>
  );
};

export default App;
