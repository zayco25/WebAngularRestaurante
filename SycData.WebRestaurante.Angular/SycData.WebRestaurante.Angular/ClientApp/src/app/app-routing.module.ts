import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'PanelMesas', component: PanelComponent, pathMatch: 'full' },
  { path: 'RegistrarComanda', component: RegistrarProductosComponent, pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
