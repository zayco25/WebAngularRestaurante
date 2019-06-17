import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { InspectorService } from './Service/Inspector';
 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    ModalComponent,
    RegistrarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot()
 

  ],
  providers: [ServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InspectorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
