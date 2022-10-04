import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
//COMPONENTES
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
import { SharedComponent } from './shared/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroUsuarioComponent,
    VerificarCorreoComponent,
    RecPasswordComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
