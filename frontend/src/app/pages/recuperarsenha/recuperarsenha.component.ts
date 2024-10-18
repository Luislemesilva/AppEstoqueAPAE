import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-recuperarsenha',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recuperarsenha.component.html',
  styleUrl: './recuperarsenha.component.css'
})

export class RecuperarsenhaComponent {
 
  constructor(private router: Router) {}
  
  redefinirSenha() {
    this.router.navigate(['/redefinirsenha']);
  }

  cancelarSenha(){
    this.router.navigate(['/'])
  }

  formulario = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
  })
}
