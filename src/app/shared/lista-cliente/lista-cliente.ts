import { Component } from '@angular/core';

@Component({
  selector: 'ara-lista-cliente',
  imports: [],
  templateUrl: './lista-cliente.html',
  styleUrl: './lista-cliente.scss',
})
export class ListaCliente {
  columns = ['Huésped', 'Departamento', 'Check-in', 'Check-out', 'Estado'];
  listaReservas = [
    {
      huesped: 'Nicolas jung',
      depto: 'planta baja',
      checkin: '2023-10-01',
      checkout: '2023-10-05',
      estado: 'confirmada',
    },
    {
      huesped: 'Maria Lopez',
      depto: 'primer piso',
      checkin: '2023-10-03',
      checkout: '2023-10-07',
      estado: 'pendiente',
    },
    {
      huesped: 'Carlos Perez',
      depto: 'segundo piso',
      checkin: '2023-10-02',
      checkout: '2023-10-06',
      estado: 'cancelada',
    },
  ];
}
