import { Component, Input } from '@angular/core';
import { ScheduleTimeService } from '../../services/schedule-time.service';
import { user } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {
  @Input() tableName: string = 'Tabela';
  @Input() tableData: user[] = [];

  constructor(private scheduleService: ScheduleTimeService) { }
  onDisponivelClick(row: user): void {
      this.scheduleService.abrirModalScheduleForm();
  }
}
