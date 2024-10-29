import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from "./pages/admin/admin.component";
import { EstoqueComponent } from "./pages/estoque/estoque.component";
import { DoacaoComponent } from "./pages/doacao/doacao.component";
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, LoginComponent, RedefinirsenhaComponent, RecuperarsenhaComponent, HomeComponent, AdminComponent, EstoqueComponent, DoacaoComponent],
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
  })
}}
