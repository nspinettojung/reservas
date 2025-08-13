import { Component } from '@angular/core';
import { Icliente } from '../../core/icliente';

@Component({
  selector: 'ara-lista-cliente',
  imports: [],
  templateUrl: './lista-cliente.html',
  styleUrl: './lista-cliente.scss',
})
export class ListaCliente {
  columns: string[] = [
    'Huésped',
    'Departamento',
    'Teléfono',
    'CUIT',
    'Cantidad de Personas',
    'Check-in',
    'Check-out',
    'Solicitudes Especiales',
    'Estado',
  ];
  listaReservas: Icliente[] = [
    {
      huesped: 'Nicolas jung',
      depto: 'planta baja',
      telefono: '123456789',
      cuit: '20-12345678-9',
      cantidadPersonas: 2,
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      solicitudesEspeciales: 'Cama extra',
      estado: 'confirmada',
    },
    {
      huesped: 'Maria Lopez',
      depto: 'primer piso',
      telefono: '987654321',
      cuit: '20-98765432-1',
      cantidadPersonas: 1,
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      solicitudesEspeciales: 'Ninguna',
      estado: 'pendiente',
    },
    {
      huesped: 'Carlos Perez',
      depto: 'segundo piso',
      telefono: '456789123',
      cuit: '20-45678912-3',
      cantidadPersonas: 3,
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      solicitudesEspeciales: 'Cama adicional',
      estado: 'cancelada',
    },
  ];
}
