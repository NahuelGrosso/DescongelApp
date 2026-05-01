import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import logo from '../assets/logo.png'
import { styles } from '../styles';

type Props = {
  setPantalla: (pantalla: string) => void;
};

export const InicioScreen = ({ setPantalla }: Props) => {
  return (
    <View style={styles.contenedorInicio}>
      <Image source={logo} style={styles.logoInicio} resizeMode="contain" />
      <Text style={styles.tituloInicio}>DescongelApp</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setPantalla('formulario')}
      >
        <Text style={styles.botonTexto}>DÍA DE IATF</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setPantalla('archivos')}
      >
        <Text style={styles.botonTexto}>ARCHIVOS DE IATF</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.latapera}>La Tapera Dev</Text>
      </View>
    </View>
  );
};
