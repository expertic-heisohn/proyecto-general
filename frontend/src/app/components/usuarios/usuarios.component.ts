import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: "usuarios",
  templateUrl: "./usuarios.component.html"
})
export class UsuariosComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}

  public usuarios = [];
  public headElements = ["id", "nombre", "acciones"];
  public usuarioIndice = null;

  public nombreInput = "";

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      console.log({ data });
      this.usuarios = data;
    });
  }

  deleteUsuario(indice: number): void {
    this.usuariosService.deleteUsuario(indice).subscribe(data => {
      console.log({ data });
      this.getUsuarios();
    });
  }

  createUsuario(): void {
    this.usuarioIndice = null;
    const nuevoUsuario: any = {
      nombre: this.nombreInput || ""
    };
    console.log("click createUsuario === ", { nuevoUsuario });
    this.usuariosService.createUsuario(nuevoUsuario).subscribe(data => {
      console.log({ data });
      this.getUsuarios();
    });
  }

  editUsuarioPopularForm(indice: number): void {
    this.usuarioIndice = indice;
    this.nombreInput = this.usuarios[indice].nombre;
  }

  guardarEdicionUsuario(): void {
    const usuarioEditado: any = {
      nombre: this.nombreInput || ""
    };
    this.usuariosService
      .editUsuario(this.usuarioIndice, usuarioEditado)
      .subscribe(data => {
        console.log({ data });
        this.getUsuarios();
      });
  }
}
