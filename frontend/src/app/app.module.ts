import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MDBBootstrapModule,
  NavbarModule,
  IconsModule
} from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UsuariosComponent } from "./components/usuarios.component";
import { UsuariosService } from "./services/usuarios.service";

@NgModule({
  declarations: [AppComponent, UsuariosComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
