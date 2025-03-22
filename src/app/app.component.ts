import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/shared/header/header.component";
import { FooterComponent } from "./core/shared/footer/footer.component";
import { MenuComponent } from "./core/shared/sidebar/menu.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'schedule-ufu';
}
