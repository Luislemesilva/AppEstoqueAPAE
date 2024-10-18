import { Routes, RouterLink } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarsenhaComponent } from './pages/recuperarsenha/recuperarsenha.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';




export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'redefinirarsenha', component: RedefinirsenhaComponent},
    {path: 'recuperarsenha', component: RecuperarsenhaComponent},
    { path: '**', redirectTo: '' }
    
   
  

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    })],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
