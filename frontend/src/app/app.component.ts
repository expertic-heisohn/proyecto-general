import { Component, ViewChild } from "@angular/core";
import { NavbarComponent } from "angular-bootstrap-md";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  public vista = "usuarios";
  @ViewChild("navbar", { static: true }) navbar: NavbarComponent;
  title = "frontend";

  cambiarVista(nuevaVista: string): void {
    this.vista = nuevaVista;
  }
}
