import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SelectSchool } from '../../../shared/components/select-school/select-school';

@Component({
  selector: 'app-form-students',
  imports: [ReactiveFormsModule, RouterLink, SelectSchool],
  templateUrl: './form-students.html',
  styleUrl: './form-students.scss',
})
export class FormStudents {

  private fb = inject(FormBuilder);

  // Signal para controlar se é edição ou novo
  isEditing = signal(false);

  alunoForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    dataNascimento: ['', Validators.required],
    matricula: [{ value: 'GERADA-AUTO', disabled: false }],
    turma: ['', Validators.required],
    turno: ['integral'],
    escola: [''],
    cidade: [''],
    estado: [''],
    bairro: [''],
  });

  save() {
    if (this.alunoForm.valid) {
      console.log('Salvando no BlocoEdu:', this.alunoForm.value);
      // Aqui entraria a chamada ao seu Service
    }
  }

  cancel() {
    this.alunoForm.reset();
  }

}
