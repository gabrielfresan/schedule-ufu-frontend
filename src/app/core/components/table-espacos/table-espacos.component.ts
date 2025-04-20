import { Component, Input } from '@angular/core';
import { ginasio } from '../../models/Ginasio';
import { CommonModule } from '@angular/common';
import { ScheduleTimeService } from '../../services/schedule-time.service';

@Component({
  selector: 'app-table-espacos',
  imports: [CommonModule],
  templateUrl: './table-espacos.component.html',
  styleUrl: './table-espacos.component.css'
})
export class TableEspacosComponent {
    @Input() tableName: string = 'Tabela';
    @Input() tableData: ginasio[] = [];
  
    constructor(private scheduleService: ScheduleTimeService) { }
    onDisponivelClick(row: ginasio): void {
        this.scheduleService.abrirModalScheduleForm();
    }

}
