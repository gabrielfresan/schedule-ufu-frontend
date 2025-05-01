import { Component, ElementRef, OnInit, ViewChild, Renderer2, Inject } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { TableComponent } from '../../components/table/table.component';
import { DatapickerComponent } from '../../components/datapicker/datapicker.component';
import { SelectFilterComponent } from '../../components/select-filter/select-filter.component';
import { CommonModule } from '@angular/common';
import { option } from '../../models/Option';
import { ScheduleTimeService } from '../../services/schedule-time.service';
import { ScheduleFormComponent } from "../../components/schedule-form/schedule-form.component";

@Component({
  selector: 'app-userschdeules',
  templateUrl: './userschdeules.component.html',
  styleUrl: './userschdeules.component.css',
  imports: [CommonModule, TableComponent, DatapickerComponent, SelectFilterComponent, ScheduleFormComponent]
})
export class UserschdeulesComponent implements OnInit {
  
    isModalOpen: boolean = false;

    @ViewChild('modalForm', { static: false }) modalForm!: ElementRef;
    @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;

      constructor(private renderer: Renderer2, @Inject(ScheduleTimeService) private scheduleTimeService: ScheduleTimeService) {
        this.scheduleTimeService.horarioDisponivelClicadoEmitter.subscribe(() => {
          this.abrirModalScheduleForm();
        });
      }

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

  
  abrirModalScheduleForm(): void {
    this.isModalOpen = true;

    if (this.modalForm?.nativeElement) {
      this.renderer.setStyle(this.modalForm.nativeElement, 'display', 'block');
    }

    if (this.modalOverlay?.nativeElement) {
      this.renderer.setStyle(this.modalOverlay.nativeElement, 'display', 'block');
    }
  }

  fecharModalScheduleForm(): void {
    this.isModalOpen = false;
    this.renderer.setStyle(this.modalForm.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.modalOverlay.nativeElement, 'display', 'none');
  }
}