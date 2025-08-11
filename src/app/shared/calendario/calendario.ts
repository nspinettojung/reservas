import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

type Fecha = { dia: number; mes: number; ano: number };

@Component({
  selector: 'ara-calendario',
  imports: [NgClass],
  templateUrl: './calendario.html',
  styleUrl: './calendario.scss',
})
export class Calendario {
  mesActual = new Date().getMonth();
  anoActual = new Date().getFullYear();

  //obtiene el mes siguiente
  get mesSiguiente(): number {
    return (this.mesActual + 1) % 12;
  }
  //obtiene el año siguiente
  get anoSiguiente(): number {
    return this.mesActual === 11 ? this.anoActual + 1 : this.anoActual;
  }

  //obtiene el rango de fechas seleccionadas
  seleccion: [Date | null, Date | null] = [null, null];

  //obtiene el nombre del mes
  nombreMes(mes: number, ano: number): string {
    return new Date(ano, mes).toLocaleString('default', { month: 'long' });
  }

  //obtiene los días del mes
  getDiasDelMes(mes: number, ano: number): number[] {
    const totalDias = new Date(ano, mes + 1, 0).getDate();
    return Array.from({ length: totalDias }, (_, i) => i + 1);
  }

  //obtiene el primer día de la semana
  getPrimerDiaSemana(mes: number, ano: number): number {
    return new Date(ano, mes, 0).getDay();
  }

  //obtiene las celdas finales
  getCeldasFinales(mes: number, ano: number): number[] {
    const primerDia = this.getPrimerDiaSemana(mes, ano);
    const totalDias = this.getDiasDelMes(mes, ano).length;
    const totalCeldas = primerDia + totalDias;
    // Siempre mostrar 6 filas (42 celdas)
    const vacias = 42 - totalCeldas;
    return Array.from({ length: vacias > 0 ? vacias : 0 });
  }

  //obtiene el mes anterior
  mesAnterior() {
    if (this.mesActual === 0) {
      this.mesActual = 11;
      this.anoActual--;
    } else {
      this.mesActual--;
    }
  }

  //obtiene el mes siguiente
  mesSiguienteFn() {
    if (this.mesActual === 11) {
      this.mesActual = 0;
      this.anoActual++;
    } else {
      this.mesActual++;
    }
  }

  //selecciona un día
  seleccionarDia(mes: number, ano: number, dia: number) {
    const fecha = new Date(ano, mes, dia);

    // Si haces click en la primera fecha seleccionada
    if (this.seleccion[0] && fecha.getTime() === this.seleccion[0].getTime()) {
      // Si hay segunda fecha, la segunda pasa a ser la única seleccionada
      if (this.seleccion[1]) {
        this.seleccion = [this.seleccion[1], null];
      } else {
        this.seleccion[0] = null;
      }
      return;
    }
    // Si haces click en la segunda fecha seleccionada, solo deselecciona la segunda
    if (this.seleccion[1] && fecha.getTime() === this.seleccion[1].getTime()) {
      this.seleccion[1] = null;
      return;
    }

    if (!this.seleccion[0] || (this.seleccion[0] && this.seleccion[1])) {
      this.seleccion = [fecha, null];
    } else if (this.seleccion[0] && !this.seleccion[1]) {
      if (fecha < this.seleccion[0]) {
        this.seleccion = [fecha, this.seleccion[0]];
      } else {
        this.seleccion[1] = fecha;
      }
    }
  }

  //limpia la selección
  limpiarSeleccion() {
    this.seleccion = [null, null];
  }

  //verifica si una fecha está en el rango seleccionado
  estaEnRango(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0]) return false;
    const fecha = new Date(ano, mes, dia);
    if (this.seleccion[0] && this.seleccion[1]) {
      return fecha >= this.seleccion[0] && fecha <= this.seleccion[1];
    }
    return fecha.getTime() === this.seleccion[0].getTime();
  }

  //verifica si una fecha es el inicio del rango seleccionado
  esInicio(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0]) return false;
    const fecha = new Date(ano, mes, dia);
    return this.seleccion[0] && fecha.getTime() === this.seleccion[0].getTime();
  }

  //verifica si una fecha es el fin del rango seleccionado
  esFin(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[1]) return false;
    const fecha = new Date(ano, mes, dia);
    return this.seleccion[1] && fecha.getTime() === this.seleccion[1].getTime();
  }

  //verifica si una fecha está en el rango seleccionado
  esIntermedio(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0] || !this.seleccion[1]) return false;
    const fecha = new Date(ano, mes, dia);
    return fecha > this.seleccion[0]! && fecha < this.seleccion[1]!;
  }

  //obtiene la clase CSS para un día
  getDiaClase(mes: number, ano: number, dia: number): string {
    if (this.esInicio(mes, ano, dia)) {
      return 'bg-blue-600 text-white rounded-l-full font-bold';
    }
    if (this.esFin(mes, ano, dia)) {
      return 'bg-blue-600 text-white rounded-r-full font-bold';
    }
    if (this.esIntermedio(mes, ano, dia)) {
      return 'bg-blue-200 rounded-none text-blue-900';
    }
    return 'hover:bg-blue-100 text-gray-800';
  }
}
