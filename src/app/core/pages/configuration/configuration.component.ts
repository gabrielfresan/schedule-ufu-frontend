import { CommonModule } from '@angular/common';
import { Component, viewChild, viewChildren } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { TableComponent } from '../../components/table/table.component';
import { DatapickerComponent } from '../../components/datapicker/datapicker.component';
import { SelectFilterComponent } from '../../components/select-filter/select-filter.component';
import { option } from '../../models/Option';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'app-configuration',
  imports: [CommonModule, TableComponent, DatapickerComponent, SelectFilterComponent, SliderComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  ShowGeral: boolean = true;
  ShowEspaco: boolean = false;
  ShowPermissao: boolean = false;


    reserva: Reserva[] = [
      {
        horario: '08:00 - 09:00',
        nome: 'G2',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Cancelar',
        campus: 'Santa Mônica'
      },
      {
        horario: '10:00 - 12:00',
        nome: 'G1 - Tenis de Mesa',
        resposavel: 'Gabriel Machado',
        curso: 'Sistemas de Informação',
        disponibilidade: 'Cancelar',
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


    onTabSelect(active: string): void {
      switch (active) {
        case 'ShowPermissao':
          this.ShowGeral = false;
          this.ShowEspaco = false;
          this.ShowPermissao = true;
          break;
        case 'ShowEspaco':
          this.ShowGeral = false;
          this.ShowEspaco = true;
          this.ShowPermissao = false;
          break;
        default:
          this.ShowGeral = true;
          this.ShowEspaco = false;
          this.ShowPermissao = false;
          break;
      }
        
    }

}
