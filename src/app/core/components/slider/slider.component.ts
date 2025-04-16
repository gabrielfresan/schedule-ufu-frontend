import { Component, Input, Output } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  imports: [MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 200;
  @Input() step: number = 10;
  @Input() title: string = "Titulo Slider";
  @Output() value: number = this.min;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / this.step).toString();
    }
    value
    return `${value}`;
  }

}
