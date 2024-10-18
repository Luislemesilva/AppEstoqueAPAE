import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RedefinirsenhaComponent } from './app/pages/redefinirsenha/redefinirsenha.component';
import { RecuperarsenhaComponent } from './app/pages/recuperarsenha/recuperarsenha.component';
import { AppRoutingModule } from './app/app.routes';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recuperarsenha', component: RecuperarsenhaComponent },
  { path: 'redefinirsenha', component: RedefinirsenhaComponent },
  { path: '**', redirectTo: '' } 
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
