export const crearBaseNombre = (
  fecha: string,
  establecimiento: string,
  numeroRodeo: number,
) => {
  return (
    fecha.replace(/\//g, '-') +
    '_' +
    establecimiento.replace(/\s/g, '_') +
    '_' +
    numeroRodeo +
    '° Rodeo'
  );
};

export const crearNombreJson = (base: string) => {
  return base + '.json';
};

export const crearNombreExcel = (base: string) => {
  return 'IATF_' + base + '.xlsx';
};

export const crearNombreExcelDesdeJson = (nombreArchivo: string) => {
  return 'IATF_' + nombreArchivo.replace('.json', '.xlsx');
};
