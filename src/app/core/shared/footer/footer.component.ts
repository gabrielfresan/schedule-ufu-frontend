import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   @Input() title: string = '2025 | Acesso UFU  | Desenvolvido pelo CTIC | Universidade Federal de Uberlândia.';

}
