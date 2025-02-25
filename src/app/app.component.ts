import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './components/headers/headers.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeadersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schedule-ufu';
}
