import { Component } from '@angular/core';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatIconModule }  from '@angular/material/icon';


import { HeaderGov } from '@govbr-ds/core';

@Component({
  selector: 'app-headers',
  imports: [
    MatToolbarModule,
    HeaderGov,
    MatIconModule
  ],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

}
