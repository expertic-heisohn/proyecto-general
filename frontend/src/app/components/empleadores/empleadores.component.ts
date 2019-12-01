import { Component, OnInit } from "@angular/core";
import { EmpleadoresService } from "../../services/empleadores.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "empleadores",
  templateUrl: "./empleadores.component.html"
})
export class EmpleadoresComponent implements OnInit {
  constructor(private empleadoresService: EmpleadoresService) {}

  public empleadores = [];
  public headElements = ["id", "nombre", "acciones"];

  public nombreInput = new FormControl();
  public idInput = new FormControl();

  ngOnInit(): void {
    this.getEmpleadores();
  }
  getEmpleadores(): void {
    this.empleadoresService.getEmpleadores().subscribe(data => {
      console.log({ data });
      this.empleadores = data;
    });
  }

  deleteEmpleador(indice: number): void {
    this.empleadoresService.deleteEmpleador(indice).subscribe(data => {
      console.log({ data });
      this.getEmpleadores();
    });
  }

  createEmpleador(): void {
    const nuevoEmpleador: any = {
      nombre: this.nombreInput.value || "",
      id: this.idInput.value || null
    };
    this.empleadoresService.createEmpleador(nuevoEmpleador).subscribe(data => {
      console.log({ data });
      this.getEmpleadores();
    });
  }
}
