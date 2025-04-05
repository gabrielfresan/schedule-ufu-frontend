import { Component } from '@angular/core';
import { Reserva } from '../../models/reservaModel';
import { CommonModule } from '@angular/common';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngAfterViewInit(): void {
    flatpickr('#simples-input', {
    });
  }
    
  reserva: Reserva[] = [
    {
      horario: '08:00 - 09:00',
      nome: 'G1',
      resposavel: 'João Silva',
      curso: 'Engenharia de Software',
      disponibilidade: 'Disponível'
    },
    {
      horario: '16:30 - 17:30',
      nome: 'G5',
      resposavel: 'Maria Oliveira',
      curso: 'Ciência da Computação',
      disponibilidade: 'Indisponível'
    },
    {
      horario: '12:00 - 14:00',
      nome: 'Campo Futebol',
      resposavel: 'Carlos Souza',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Disponível'
    },
    {
      horario: '12:00 - 14:00',
      nome: 'G1',
      resposavel: 'Ana Costa',
      curso: 'Engenharia Elétrica',
      disponibilidade: 'Indisponível'
    },
    {
      horario: '08:00 - 09:00',
      nome: 'G2',
      resposavel: 'Gabriel Machado',
      curso: 'Sistemas de Informação',
      disponibilidade: 'Indisponível'
    },
  ];

  dropdownOptions = [
    { id: 'criar-reserva', value: 'criar-reserva', label: 'Criar Reserva' },
    { id: 'editar-reserva', value: 'editar-reserva', label: 'Editar Reserva' },
    { id: 'cancelar-reserva', value: 'cancelar-reserva', label: 'Cancelar Reserva' },
  ];

  onDropdownChange(value: string): void {
    console.log('Selected action:', value);
    // Add your logic here
  }
}
