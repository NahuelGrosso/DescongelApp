import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 20,
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

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginTop: 0,
    flex: 1,
    marginRight: 10,
  },

  boton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
  },

  botonTexto: {
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 16,
  },

  filaBotonesResumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  filaBotonesCentro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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

  areaScroll: {
    flex: 1,
  },

  scrollContenido: {
    paddingBottom: 20,
  },

  footerBotones: {
    paddingTop: 8,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f0f2f5',
  },

  scrollDetalle: {
    paddingTop: 1,
    paddingBottom: 10,
    flexGrow: 1,
  },
});
