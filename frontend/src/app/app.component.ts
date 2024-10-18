import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { passwordMatchValidator } from './pages/validadorsenha/validadorsenha.component'
import { FormControl, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent, RedefinirsenhaComponent, RecuperarsenhaComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'apae';
  
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: passwordMatchValidator('password', 'confirmPassword') });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário enviado com sucesso:', this.formulario.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
