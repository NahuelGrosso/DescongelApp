export const toggleSeleccionArchivo = (lista: string[], path: string) => {
  if (lista.includes(path)) {
    return lista.filter(item => item !== path);
  }

  return [...lista, path];
};

export const limpiarSeleccion = () => {
  return [];
};

export const estaSeleccionado = (lista: string[], path: string) => {
  return lista.includes(path);
};