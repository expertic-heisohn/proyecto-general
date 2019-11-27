import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "usuarios",
  templateUrl: "./usuarios.component.html"
})
export class UsuariosComponent implements OnInit {
  public usuarios = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      console.log({ data });
      this.usuarios = data;
    });
  }
}