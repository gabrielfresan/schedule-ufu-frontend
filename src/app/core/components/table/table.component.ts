import { Component, Input } from '@angular/core';
import { Reserva } from '../../models/Reserva';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() tableName: string = 'Tabela';
  @Input() tableData: Reserva[] = [];

}
