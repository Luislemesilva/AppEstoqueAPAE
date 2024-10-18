import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {
  
  constructor(private router: Router) {}
  
  recuperarSenha() {
    this.router.navigate(['/recuperarsenha']);
  }

  formulario = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.min(4), Validators.max(8)]),
  })
}
