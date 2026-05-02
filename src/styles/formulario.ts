import { StyleSheet } from 'react-native';

export const formularioStyles = StyleSheet.create({

  headerSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
});