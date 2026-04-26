import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle, Line, G, Path, Text as SvgText } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import Sound from 'react-native-sound';
import { styles } from '../styles';
import { obtenerPathCuadrante } from '../util';

type Pajuela = {
  id: number;
  activa: boolean;
  segundos: number;
  listo: boolean;
};
type Props = {
  pajuelas: Pajuela[];

  manejarToquePajuela: (index: number) => void;

  segundosTranscurridos: number;

  cronometroPausado: boolean;

  setCronometroPausado: (v: boolean) => void;

  setPantalla: (pantalla: string) => void;
};

export const GraficoScreen = ({
  pajuelas,
  manejarToquePajuela,
  segundosTranscurridos,
  cronometroPausado,
  setCronometroPausado,
  setPantalla,
}: Props) => {
  return (
    <View style={styles.contenedorGrafico}>
      {/* Cronómetro */}
      <View style={styles.contenedorCronometroTotal}>
        <Text style={styles.textoRelojGrande}>
          {Math.floor(segundosTranscurridos / 60)}:
          {(segundosTranscurridos % 60).toString().padStart(2, '0')}
        </Text>

        <TouchableOpacity
          style={styles.botonPausa}
          onPress={() => setCronometroPausado(!cronometroPausado)}
        >
          <Text style={styles.textoBotonPausa}>
            {cronometroPausado ? '▶️ REANUDAR' : '⏸️ PAUSAR'}
          </Text>
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.tituloTorta}>Termo de Descongelado</Text>
      </View>

      {/* Gráfico */}
      <View style={styles.marcoCirculo}>
        <Svg height="380" width="380" viewBox="0 0 250 250">
          <Circle
            cx="125"
            cy="125"
            r="115"
            fill="#000000"
            stroke="grey"
            strokeWidth="10"
          />

          {pajuelas.map((p, i) => {
            const centroX = i === 0 || i === 3 ? 85 : 165;
            const centroY = i === 0 || i === 1 ? 85 : 165;

            let colorPorcion = 'transparent';
            if (p.activa) colorPorcion = p.listo ? '#27ae60' : '#3498db';

            return (
              <G key={i} onPress={() => manejarToquePajuela(i)}>
                <Path
                  d={obtenerPathCuadrante(i)}
                  fill={colorPorcion}
                  opacity={0.6}
                />

                {p.activa && (
                  <SvgText
                    x={centroX}
                    y={centroY}
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                  >
                    {p.listo ? `+${Math.abs(p.segundos)}s` : `${p.segundos}s`}
                  </SvgText>
                )}
              </G>
            );
          })}

          <Line
            x1="125"
            y1="10"
            x2="125"
            y2="240"
            stroke="grey"
            strokeWidth="3"
          />
          <Line
            x1="10"
            y1="125"
            x2="240"
            y2="125"
            stroke="grey"
            strokeWidth="3"
          />
        </Svg>
      </View>

      <View style={styles.contenedorBotones}>
        {/* Botón volver */}
        <TouchableOpacity
          style={styles.botonVolverTorta}
          onPress={() => setPantalla('formulario')}
        >
          <Text style={styles.botonTexto}>VOLVER</Text>
        </TouchableOpacity>

        {/* Botón finalizar */}
        <TouchableOpacity
          style={styles.botonFinalizar}
          onPress={() => {
            // después definimos qué hace
            console.log('Finalizar actividad');
          }}
        >
          <Text style={styles.botonTexto}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
