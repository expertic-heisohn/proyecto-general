import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IEmpleador from "../interfaces/empleador";
import { Observable } from "rxjs";

@Injectable()
export class EmpleadoresService {
  constructor(private http: HttpClient) {}

  /* en _url va la dirección del servicio en java */
  private _url = "https://bootcamp-dia-3.camilomontoyau.now.sh";

  getEmpleadores(): Observable<IEmpleador[]> {
    return this.http.get<IEmpleador[]>(`${this._url}/empleadores`);
  }

  deleteEmpleador(indice: number): Observable<any> {
    return this.http.delete<any>(`${this._url}/empleadores/${indice}`);
  }

  createEmpleador(usuario: IEmpleador): Observable<IEmpleador> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<IEmpleador>(
      `${this._url}/empleadores/`,
      usuario,
      httpOptions
    );
  }
}
