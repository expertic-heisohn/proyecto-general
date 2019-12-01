import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MDBBootstrapModule,
  NavbarModule,
  IconsModule,
  TableModule
} from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { UsuariosService } from "./services/usuarios.service";
import { EmpleadoresComponent } from "./components/empleadores/empleadores.component";
import { EmpleadoresService } from "./services/empleadores.service";

@NgModule({
  declarations: [AppComponent, UsuariosComponent, EmpleadoresComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    HttpClientModule,
    IconsModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuariosService, EmpleadoresService],
  bootstrap: [AppComponent]
})
export class AppModule {}
