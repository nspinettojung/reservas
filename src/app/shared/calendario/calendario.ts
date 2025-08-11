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

  get mesSiguiente(): number {
    return (this.mesActual + 1) % 12;
  }
  get anoSiguiente(): number {
    return this.mesActual === 11 ? this.anoActual + 1 : this.anoActual;
  }

  seleccion: [Date | null, Date | null] = [null, null];

  nombreMes(mes: number, ano: number): string {
    return new Date(ano, mes).toLocaleString('default', { month: 'long' });
  }

  getDiasDelMes(mes: number, ano: number): number[] {
    const totalDias = new Date(ano, mes + 1, 0).getDate();
    return Array.from({ length: totalDias }, (_, i) => i + 1);
  }

  getPrimerDiaSemana(mes: number, ano: number): number {
    return new Date(ano, mes, 0).getDay();
  }

  getCeldasFinales(mes: number, ano: number): number[] {
    const primerDia = this.getPrimerDiaSemana(mes, ano);
    const totalDias = this.getDiasDelMes(mes, ano).length;
    const totalCeldas = primerDia + totalDias;
    // Siempre mostrar 6 filas (42 celdas)
    const vacias = 42 - totalCeldas;
    return Array.from({ length: vacias > 0 ? vacias : 0 });
  }

  mesAnterior() {
    if (this.mesActual === 0) {
      this.mesActual = 11;
      this.anoActual--;
    } else {
      this.mesActual--;
    }
  }

  mesSiguienteFn() {
    if (this.mesActual === 11) {
      this.mesActual = 0;
      this.anoActual++;
    } else {
      this.mesActual++;
    }
  }

  seleccionarDia(mes: number, ano: number, dia: number) {
    const fecha = new Date(ano, mes, dia);
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

  limpiarSeleccion() {
    this.seleccion = [null, null];
  }

  estaEnRango(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0]) return false;
    const fecha = new Date(ano, mes, dia);
    if (this.seleccion[0] && this.seleccion[1]) {
      return fecha >= this.seleccion[0] && fecha <= this.seleccion[1];
    }
    return fecha.getTime() === this.seleccion[0].getTime();
  }

  esInicio(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0]) return false;
    const fecha = new Date(ano, mes, dia);
    return this.seleccion[0] && fecha.getTime() === this.seleccion[0].getTime();
  }

  esFin(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[1]) return false;
    const fecha = new Date(ano, mes, dia);
    return this.seleccion[1] && fecha.getTime() === this.seleccion[1].getTime();
  }

  esIntermedio(mes: number, ano: number, dia: number): boolean {
    if (!this.seleccion[0] || !this.seleccion[1]) return false;
    const fecha = new Date(ano, mes, dia);
    return fecha > this.seleccion[0]! && fecha < this.seleccion[1]!;
  }

  getDiaClase(mes: number, ano: number, dia: number): string {
    if (this.esInicio(mes, ano, dia)) {
      return 'bg-blue-600 text-white rounded-l-full font-bold border-2 ';
    }
    if (this.esFin(mes, ano, dia)) {
      return 'bg-blue-600 text-white rounded-r-full font-bold border-2 ';
    }
    if (this.esIntermedio(mes, ano, dia)) {
      return 'bg-blue-200 rounded-none text-blue-900';
    }
    return 'hover:bg-blue-100 text-gray-800';
  }
}
