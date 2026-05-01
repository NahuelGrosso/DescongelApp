import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

  scrollDetalle: {
    paddingTop: 1,
    paddingBottom: 10,
    flexGrow: 1,
  },

  contenedor: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
  },

  labelMes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  tarjetaMes: {
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    marginTop: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#76a1bb',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  tarjeta: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  headerSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginTop: 0,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },

  datoFijo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10,
    paddingVertical: 5,
  },

  boton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },

  botonTexto: {
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 16,
  },

  filaBotonesCentro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    marginTop: 12,
  },
  //fin formulario

  contenedorGrafico: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
  },

  tituloTorta: {
    fontSize: 25,
    color: '#0c0c0c',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 1,
  },

  marcoCirculo: {
    flex: 1,
    width: '100%',
    height: 400,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 2,
  },

  // BOTONES finales //
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  botonFinalizar: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    width: '40%',
  },

  botonVolverTorta: {
    backgroundColor: '#ad1606',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '40%',
    alignItems: 'center',
  },

  contenedorCronometroTotal: {
    alignItems: 'center',
  },

  textoRelojGrande: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    fontWeight: 'bold',
    fontSize: 70,
    borderRadius: 10,
    paddingHorizontal: 25,
  },

  botonPausa: {
    backgroundColor: 'rgba(8, 0, 0, 0.7)',
    padding: 10,
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    borderColor: '#faf5f5',
    borderWidth: 2,
  },

  textoBotonPausa: {
    color: '#ecf0f1',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },

  vacasRestantes: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#080808',
    padding: 8,
    margin: 5,
    width: '90%',
    marginTop: 15,
  },

  textoVacas: {
    color: '#080808',
    fontSize: 30,
  },

  numeroVacas: {
    color: '#928c8c',
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 2,

    backgroundColor: '#080808',
    borderRadius: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },

  filaRotas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#080808',
    padding: 8,
    margin: 5,
    width: '90%',
    marginTop: 15,
  },
  textoRotas: {
    color: '#080808',
    fontSize: 30,
  },
  numeroRotas: {
    color: '#928c8c',
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 2,

    backgroundColor: '#080808',
    borderRadius: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },
  botonRotas: {
    backgroundColor: '#e74c3c',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#080808',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    paddingRight: 25,
    paddingLeft: 25,
  },

  filaBotonesResumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  botonMini: {
    backgroundColor: '#34495e',
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotonMini: {
    fontSize: 11,
    color: '#f8f2f2',
  },

  filaBotonesFinales: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
