export const obtenerPathCuadrante = (i: any) => {
  const paths = [
    'M 125 125 L 125 10 A 115 115 0 0 0 10 125 Z', // Arriba Izquierda
    'M 125 125 L 240 125 A 115 115 0 0 0 125 10 Z', // Arriba Derecha
    'M 125 125 L 125 240 A 115 115 0 0 0 240 125 Z', // Abajo Derecha
    'M 125 125 L 10 125 A 115 115 0 0 0 125 240 Z', // Abajo Izquierda
  ];
  return paths[i];
};