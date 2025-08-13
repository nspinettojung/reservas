import { Component } from '@angular/core';
import { Calendario } from '../../shared/calendario/calendario';
import { Sidenav } from '../../shared/sidenav/sidenav';

@Component({
  selector: 'app-reservas',
  imports: [Calendario, Sidenav],
  templateUrl: './reservas.html',
  styleUrl: './reservas.scss',
})
export class Reservas {
  cpersonas = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
  ];

  departamento = [
    { value: '1', label: 'Planta Baja' },
    { value: '2', label: 'Primera Planta' },
  ];
}
