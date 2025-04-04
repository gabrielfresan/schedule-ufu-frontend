import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: string = 'Fulano de Tal';
  randomColor: string = this.getRandomColor();

  getRandomColor(): string {
    const colors = [
      'bg-red-500',    // Vermelho forte
      'bg-blue-500',   // Azul forte
      'bg-green-500',  // Verde forte
      'bg-yellow-600', // Amarelo escuro
      'bg-orange-500', // Laranja forte
      'bg-purple-500', // Roxo forte
      'bg-pink-500',   // Rosa forte
      'bg-teal-500',   // Verde-azulado forte
      'bg-indigo-500', // Índigo forte
      'bg-gray-800'    // Cinza escuro
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
