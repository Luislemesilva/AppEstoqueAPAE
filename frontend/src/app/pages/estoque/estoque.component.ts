import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

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

