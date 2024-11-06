import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doacao',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './doacao.component.html',
  styleUrl: './doacao.component.css'
})
export class DoacaoComponent {

  constructor(private router: Router) {}
   
  isModalOpen = false;

  abrirModal() {
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }

  salvarMudancas() {
    this.fecharModal();
  }

  confirmarSaida() {
    this.router.navigate(['/login']);
    console.log("Botão de sair clicado");
  }
}
