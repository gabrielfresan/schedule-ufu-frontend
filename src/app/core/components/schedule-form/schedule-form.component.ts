import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownnComponent } from "../dropdownn/dropdownn.component";
import { option } from '../../models/Option';

@Component({
    selector: 'app-schedule-form',
    templateUrl: './schedule-form.component.html',
    styleUrls: ['./schedule-form.component.css'],
    imports: [CommonModule, ReactiveFormsModule, DropdownnComponent]
})
export class ScheduleFormComponent implements OnInit {
    scheduleForm!: FormGroup;
    horarioRecorrente: boolean = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.scheduleForm = this.fb.group({
            campus: ['', Validators.required],
            ginasio: ['', Validators.required],
            horario: ['', [Validators.required]],
            terminaEm: [''],
            dataTermino: [''],
            ocorrencias: [''],
            responsavel: ['', Validators.required],
            curso: ['', Validators.required],
            matricula: ['', Validators.required],
            telefone: [
                '',
                [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)],
            ],
            quantidade: ['', [Validators.required, Validators.min(1)]],
        });

        Object.keys(this.scheduleForm.controls).forEach(controlName => {
            const control = this.scheduleForm.get(controlName);
            control?.markAsPristine();
            control?.markAsUntouched();
        });
    }

    onSubmit(): void {
        // TODO: Implementar lógica de envio do formulário
        if (this.scheduleForm.valid) {
            console.log('Formulário enviado com sucesso!', this.scheduleForm.value);
        }
    }

    getErrorMessage(controlName: string): string {
        const control = this.scheduleForm.get(controlName);
        if (control?.hasError('required')) {
            return 'Campo obrigatório.';
        }
        if (control?.hasError('pattern')) {
            if (controlName === 'horario') {
                return 'Use o formato: DD/MM/AAAA - HH:MM às HH:MM.';
            }
            if (controlName === 'telefone') {
                return 'Use o formato: (XX) XXXXX-XXXX.';
            }
        }
        if (control?.hasError('min')) {
            return 'O valor deve ser maior que 0.';
        }
        return '';
    }

    onCampusSelected(selected: option): void {
        this.scheduleForm.get('campus')?.setValue(selected.value);
    }

    onGinasioSelected(selected: option): void {
        this.scheduleForm.get('ginasio')?.setValue(selected.value);
    }

    onHorarioRecorrente() {
        this.horarioRecorrente = !this.horarioRecorrente;
    }

    //dropdown options
    CampusOptions: Array<option> = [
        { id: 'santa-monica', value: 'Santa Mônica', label: 'Santa Mônica' },
        { id: 'faefi', value: 'FAEFI', label: 'FAEFI' },
    ];

    GinasioOptions: Array<option> = [
        { id: 'g1', value: 'G1', label: 'G1' },
        { id: 'g2', value: 'G2', label: 'G2' },
    ];
}