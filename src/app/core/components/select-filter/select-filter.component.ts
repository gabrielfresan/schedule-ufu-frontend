import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { option } from '../../models/Option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-filter',
  imports: [CommonModule],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent {
    @Input() dropdownOptions: Array<option> = [];
    @Output() selectedOption = new EventEmitter<option>();
  
      // Select configuration
      @ViewChild('dropdownList') dropdownList!: ElementRef;
      isDropdownOpen: boolean = false;
      // Variáveis para o filtro e lista a ser mostrada
      selectedCampus: string = '';
      selectedLabel: string = "Selecione o Campus para filtrar";
    
  
    //lógica do dropdown
    toggleDropdown(): void {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        this.dropdownList.nativeElement.style.display = 'absolute';
      } else {
        this.dropdownList.nativeElement.style.display = 'none';
      }
    }

  //Exibição da lista
  onDropdownChange(selectedValue: string): void {
    var selected = this.dropdownOptions.find(option => option.value === selectedValue) || this.dropdownOptions[0];
    this.selectedLabel = selected.label;
    this.selectedCampus = selected.value;
    this.selectedOption.emit(selected); 
    this.toggleDropdown();
  }

}
