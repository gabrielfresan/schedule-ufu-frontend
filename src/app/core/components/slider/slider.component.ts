import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 200;
  @Input() step: number = 10;
  @Input() title: string = "Titulo Slider";
  @Input() value: number = this.min;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  onSliderValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = Number(target.value);
    this.value = newValue; 
    this.valueChange.emit(this.value);
  }



}
