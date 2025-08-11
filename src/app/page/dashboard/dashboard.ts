import { Component } from '@angular/core';
import { Sidenav } from '../../shared/sidenav/sidenav';
import { ListaCliente } from '../../shared/lista-cliente/lista-cliente';
import { ListaDepto } from '../../shared/lista-depto/lista-depto';

@Component({
  selector: 'app-dashboard',
  imports: [Sidenav, ListaCliente, ListaDepto],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
