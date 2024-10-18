import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-redefinirsenha',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './redefinirsenha.component.html',
  styleUrl: './redefinirsenha.component.css'
})
export class RedefinirsenhaComponent {

  
  constructor(private router: Router) {}
  
  voltarLogin() {
    this.router.navigate(['/']);
  }

  formulario = new FormGroup({
    senha: new FormControl ('', [Validators.required, Validators.minLength(4)
    ]),
  })
  
}
