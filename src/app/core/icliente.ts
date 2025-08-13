export interface Icliente  {
  huesped: string;
  depto: string;
  telefono: string;
  cuit: string;
  cantidadPersonas: number;
  checkin: string;
  checkout: string;
  solicitudesEspeciales?: string;
  estado: string;
};
