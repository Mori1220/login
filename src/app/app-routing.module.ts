import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {
  RecPasswordComponent,
} from './components/rec-password/rec-password.component';
import {
  RegistroUsuarioComponent,
} from './components/registro-usuario/registro-usuario.component';
import {
  VerificarCorreoComponent,
} from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '',redirectTo: 'Login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'rec-password', component: RecPasswordComponent},
  { path: 'verificar-correo', component: VerificarCorreoComponent},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
