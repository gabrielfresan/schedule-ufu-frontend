import { AfterViewInit, Component } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-datapicker',
  imports: [],
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.css'
})
export class DatapickerComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    flatpickr('#simples-input', {});
  }
}
