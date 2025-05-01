import { Component, Input } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { CommonModule } from '@angular/common';
import { ScheduleTimeService } from '../../services/schedule-time.service';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() tableName: string = 'Tabela';
  @Input() tableData: Reserva[] = [];

  constructor(private scheduleService: ScheduleTimeService) { }

  onDisponivelClick(row: Reserva): void {
    if (row.disponibilidade === 'Disponível') {
      this.scheduleService.abrirModalScheduleForm();
    }else if (row.disponibilidade === 'Editar') {
      this.scheduleService.abrirModalScheduleForm();
    }
  }
}
