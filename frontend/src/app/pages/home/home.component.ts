import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

  constructor(private router: Router) {}

  estoque() {
    this.router.navigate(['/estoque']);
  }

  admin() {
    this.router.navigate(['/admin']);
  }

  doacao() {
    console.log("Navegando para /doacao");
    this.router.navigate(['/doacao']);
  }
}
