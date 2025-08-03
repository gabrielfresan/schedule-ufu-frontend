import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../components/table/table.component";
import { SelectFilterComponent } from "../../components/select-filter/select-filter.component";
import { option } from '../../models/Option';
import { DatapickerComponent } from "../../components/datapicker/datapicker.component";
import { ScheduleFormComponent } from '../../components/schedule-form/schedule-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleTimeService } from '../../services/schedule-time.service';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, TableComponent, SelectFilterComponent, DatapickerComponent, ScheduleFormComponent, ReactiveFormsModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  isModalOpen: boolean = false;

  @ViewChild('modalForm', { static: false }) modalForm!: ElementRef;
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;

  constructor(private renderer: Renderer2, private scheduleTimeService: ScheduleTimeService) {
    this.scheduleTimeService.horarioDisponivelClicadoEmitter.subscribe(() => {
      this.abrirModalScheduleForm();
    });
  }

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
      this.filteredReserva = this.reserva.filter(row => row.campus === this.selectedCampus);
    } else {
      this.filteredReserva = this.reserva;
    }
  }


  ngOnInit(): void {
    this.filteredReserva = this.reserva;
  }

  // Select Options(Dropdown)
  dropdownOptions: Array<option> = [
    { id: 'todos', value: '', label: 'Todos' },
    { id: 'santa-monica', value: 'Santa Mônica', label: 'Santa Mônica' },
    { id: 'faefi', value: 'FAEFI', label: 'FAEFI' },
  ];

  //Exibição da lista
  onOptionSelected(option: option) {
    this.selectedCampus = option.value;
    this.selectedLabel = option.label;
    this.filterTable();
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

    if (this.modalForm?.nativeElement) {
      this.renderer.setStyle(this.modalForm.nativeElement, 'display', 'none');
    }

    if (this.modalOverlay?.nativeElement) {
      this.renderer.setStyle(this.modalOverlay.nativeElement, 'display', 'none');
    }
  }

}
