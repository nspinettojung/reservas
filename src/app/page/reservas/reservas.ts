import { Component } from '@angular/core';
import { Calendario } from "../../shared/calendario/calendario";
import { Sidenav } from "../../shared/sidenav/sidenav";

@Component({
  selector: 'app-reservas',
  imports: [Calendario, Sidenav],
  templateUrl: './reservas.html',
  styleUrl: './reservas.scss'
})
export class Reservas {

}
