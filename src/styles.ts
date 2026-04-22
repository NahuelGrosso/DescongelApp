import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a5276',
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
    marginTop: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
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
  //fin formulario
 
  //
 /* datoFijo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c2017',
    marginBottom: 10,
    paddingVertical: 5,
  },

  contenedorCentrado: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    padding: 30,
  },

  subtitulo: {
    fontSize: 18,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 25,
  },

  pickerBorde: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 55,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  pickerTexto: {
    color: '#333',
    height: 55,
    width: '100%',
  },

  botonAdescongelar: {
    backgroundColor: '#1a5276',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },

 // textoVolver: {
   // color: '#7f8c8d',
    //marginTop: 25,
    //textAlign: 'center',
   // fontSize: 16,
  //},
*/
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
});