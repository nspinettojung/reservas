import { Component } from '@angular/core';

@Component({
  selector: 'ara-lista-depto',
  imports: [],
  templateUrl: './lista-depto.html',
  styleUrl: './lista-depto.scss',
})
export class ListaDepto {
  columns = [
    'Departamento',
    'Cantidad de personas',
    'Estado',
    'Precio por Noche',
  ];

  listadepto = [
    {
      departamento: 'Planta Baja',
      cantidadPersonas: 6,
      precioPorNoche: 100,
      estado: 'Disponible',
    },
    {
      departamento: 'Primer Piso',
      cantidadPersonas: 4,
      precioPorNoche: 150,
      estado: 'Ocupado',
    },
  ];
}
