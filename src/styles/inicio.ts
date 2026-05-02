import { StyleSheet } from 'react-native';

export const inicioStyles = StyleSheet.create({
  contenedorInicio: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#020202',
  },
  logoInicio: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  tituloInicio: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#bde1f8',
    textAlign: 'center',
    letterSpacing: 3,
    marginTop: 30,
    marginBottom: 20,
  },
  latapera: {
    color: '#e7e2e2',
    textAlign: 'center',
    fontSize: 8,
    letterSpacing: 3,
    marginTop: 140,

    //justifyContent: 'center',
  },
});
