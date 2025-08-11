import { Component } from '@angular/core';
import { Sidenav } from '../../shared/sidenav/sidenav';
import { ListaCliente } from '../../shared/lista-cliente/lista-cliente';
import { ListaDepto } from '../../shared/lista-depto/lista-depto';
import { Calendario } from "../../shared/calendario/calendario";

@Component({
  selector: 'app-dashboard',
  imports: [Sidenav, ListaCliente, ListaDepto, Calendario],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
