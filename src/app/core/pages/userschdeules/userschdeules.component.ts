import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../components/table/table.component";
import { SelectFilterComponent } from "../../components/select-filter/select-filter.component";
import { option } from '../../models/Option';
import { DatapickerComponent } from "../../components/datapicker/datapicker.component";
import { Reserva } from '../../models/Reserva';

@Component({
  selector: 'app-userschdeules',
  imports: [CommonModule, TableComponent, SelectFilterComponent, DatapickerComponent],
  templateUrl: './userschdeules.component.html',
  styleUrl: './userschdeules.component.css'
})
export class UserschdeulesComponent {
    // Todas as reservas da tabela
    reserva: Reserva[] = [
      {
        horario: '08:00 - 09:00',
        nome: 'G2',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Indisponível',
        campus: 'Santa Mônica'
      },
      {
        horario: '10:00 - 12:00',
        nome: 'G1 - Tenis de Mesa',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Indisponível',
        campus: 'FAEFI'
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
    @ViewChild(DatapickerComponent) datapickerComponent!: DatapickerComponent;
    ngAfterViewInit(): void {
      this.filteredReserva = this.reserva;
    }
  
    // Select Options(Dropdown)
    dropdownOptions : Array<option> = [
      { id: 'todos', value: '', label: 'Todos'},
      { id: 'santa-monica', value: 'Santa Mônica', label: 'Santa Mônica' },
      { id: 'faefi', value: 'FAEFI', label: 'FAEFI' },
    ];
  
    //Exibição da lista
    onOptionSelected(option : option) {
      this.selectedCampus = option.value;
      this.selectedLabel = option.label;
      this.filterTable();
    }

}
