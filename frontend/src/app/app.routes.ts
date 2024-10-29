import { Routes, RouterLink } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'redefinirarsenha', component: RedefinirsenhaComponent},
    {path: 'recuperarsenha', component: RecuperarsenhaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'doacao', component: DoacaoComponent},
    {path: 'estoque', component: EstoqueComponent},
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
