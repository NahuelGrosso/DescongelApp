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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  datoFijo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
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

  textoVolver: {
    color: '#7f8c8d',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 16,
  },

  contenedorGrafico: {
    flex: 1,
    backgroundColor: '#417291',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
  },

  tituloTorta: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 5,
  },

  marcoCirculo: {
    flex: 1,
    width: '100%',
    height: 400,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 20,
  },

  botonVolverTorta: {
    backgroundColor: '#c0392b',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '30%',
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
    backgroundColor: 'rgba(8, 0, 0, 0.57)',
    padding: 10,
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 3,
  },

  textoBotonPausa: {
    color: '#ecf0f1',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});