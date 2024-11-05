import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

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
