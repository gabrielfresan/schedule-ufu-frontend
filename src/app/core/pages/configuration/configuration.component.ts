import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { TableComponent } from '../../components/table/table.component';
import { DatapickerComponent } from '../../components/datapicker/datapicker.component';
import { SelectFilterComponent } from '../../components/select-filter/select-filter.component';
import { option } from '../../models/Option';

@Component({
  selector: 'app-configuration',
  imports: [CommonModule, TableComponent, DatapickerComponent, SelectFilterComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
    reserva: Reserva[] = [
      {
        horario: '08:00 - 09:00',
        nome: 'G2',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Editar',
        campus: 'Santa Mônica'
      },
      {
        horario: '10:00 - 12:00',
        nome: 'G1 - Tenis de Mesa',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Editar',
        campus: 'FAEFI'
      }
    ];
  
    filteredReserva: Reserva[] = [];
    selectedCampus: string = '';
    selectedLabel: string = "Selecione o Campus para filtrar";
  
    dropdownOptions: Array<option> = [
      { id: 'todos', value: '', label: 'Todos' },
      { id: 'santa-monica', value: 'Santa Mônica', label: 'Santa Mônica' },
      { id: 'faefi', value: 'FAEFI', label: 'FAEFI' }
    ];
  
    ngOnInit(): void {
      this.filteredReserva = this.reserva;
    }
  
    onOptionSelected(option: { value: string; label: string }): void {
      this.selectedCampus = option.value;
      this.selectedLabel = option.label;
      this.filterTable();
    }
  
    filterTable(): void {
      if (this.selectedCampus) {
        this.filteredReserva = this.reserva.filter(row => row.campus === this.selectedCampus);
      } else {
        this.filteredReserva = this.reserva;
      }
    }

}
