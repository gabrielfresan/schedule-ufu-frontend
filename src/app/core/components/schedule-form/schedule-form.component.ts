import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-schedule-form',
    templateUrl: './schedule-form.component.html',
    styleUrls: ['./schedule-form.component.css'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class ScheduleFormComponent implements OnInit {
    scheduleForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.scheduleForm = this.fb.group({
            campus: ['', Validators.required],
            ginasio: ['', Validators.required],
            horario: [
                '',
                [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4} - \d{2}:\d{2} às \d{2}:\d{2}$/)],
            ],
            responsavel: ['', Validators.required],
            curso: ['', Validators.required],
            matricula: ['', Validators.required],
            telefone: [
                '',
                [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)],
            ],
            quantidade: ['', [Validators.required, Validators.min(1)]],
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
}