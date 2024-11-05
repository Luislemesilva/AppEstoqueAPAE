import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  standalone: true,
  imports: [CommonModule],
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
    // Lógica para confirmar a saída
    console.log("Saindo da conta...");
    this.fecharModal(); // Fecha o modal após a ação
  }
}
