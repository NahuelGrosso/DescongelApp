import { StyleSheet } from 'react-native';

export const graficoStyles = StyleSheet.create({
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
});
