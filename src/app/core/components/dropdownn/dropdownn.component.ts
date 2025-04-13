import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { option } from '../../models/Option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdownn',
   imports: [CommonModule],
  templateUrl: './dropdownn.component.html',
  styleUrl: './dropdownn.component.css'
})
export class DropdownnComponent {
      @Input() field: string = 'Campo';
      @Input() placeholder: string = 'Selecione alguma opção';
      @Input() dropdownOptions: Array<option> = [];
      @Output() selectedOption = new EventEmitter<option>();

            // Select configuration
            @ViewChild('dropdownList') dropdownList!: ElementRef;
            isDropdownOpen: boolean = false;
            // Variáveis para o filtro e lista a ser mostrada
            selectedCampus: string = '';
            selectedLabel: string = this.placeholder;
          
        
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
          this.selectedOption.emit(selected); // Emit the selected option
          this.toggleDropdown();
        }

}
