import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Reserva } from '../../../models/reservaModel';
import { CommonModule } from '@angular/common';
import flatpickr from 'flatpickr';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, TableComponent],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements AfterViewInit {

  // Todas as reservas da tabela
  reserva: Reserva[] = [
    {
      horario: '08:00 - 09:00',
      nome: 'G1',
      resposavel: 'João Silva',
      curso: 'Engenharia de Software',
      disponibilidade: 'Disponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '16:30 - 17:30',
      nome: 'G5',
      resposavel: 'Maria Oliveira',
      curso: 'Ciência da Computação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '12:00 - 14:00',
      nome: 'Campo Futebol',
      resposavel: 'Carlos Souza',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Disponível',
      campus: 'FAEFI'
    },
    {
      horario: '12:00 - 14:00',
      nome: 'G1',
      resposavel: 'Ana Costa',
      curso: 'Engenharia Elétrica',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    }
    ,
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    }
    ,
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível',
      campus: 'Santa Mônica'
    }
  ];

  // Variáveis para o filtro e lista a ser mostrada
  selectedCampus: string = '';
  selectedLabel: string = "Selecione o Campus para filtrar";
  filteredReserva: Reserva[] = [];

  filterTable(): void {
    if (this.selectedCampus) {
      this.filteredReserva = this.reserva.filter(row => row.campus == this.selectedCampus);
    } else {
      this.filteredReserva = this.reserva;
    }
  }

  // Configurações iniciais do Flatpickr e filtro
  ngAfterViewInit(): void {
    flatpickr('#simples-input', {});
    this.filteredReserva = this.reserva;
  }

    // Select configuration
    @ViewChild('dropdownList') dropdownList!: ElementRef;
    isDropdownOpen: boolean = false;
  

  //lógica do dropdown
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.dropdownList.nativeElement.style.display = 'absolute';
    } else {
      this.dropdownList.nativeElement.style.display = 'none';
    }
  }

  // Select (Dropdown) configuration
  dropdownOptions = [
    { id: 'santa-monica', value: 'Santa Mônica', label: 'Santa Mônica' },
    { id: 'faefi', value: 'FAEFI', label: 'FAEFI' },
    { id: 'todos', value: '', label: 'Todos', default: true },
  ];

  //Exibição da lista
  onDropdownChange(selectedValue: string): void {
    this.selectedCampus = selectedValue;
    this.selectedLabel = selectedValue;
    this.filterTable();
    this.toggleDropdown();
  }

}
