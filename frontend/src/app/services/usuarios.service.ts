import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IUsuario from "../interfaces/usuario";
import { Observable } from "rxjs";

@Injectable()
export class UsuariosService {
  constructor(private http: HttpClient) {}

  /* en _url va la dirección del servicio en java */
  private _url = "https://bootcamp-dia-3.camilomontoyau.now.sh";

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this._url}/usuarios`);
  }

  deleteUsuario(indice: number): Observable<any> {
    return this.http.delete<any>(`${this._url}/usuarios/${indice}`);
  }

  createUsuario(usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<IUsuario>(
      `${this._url}/usuarios/`,
      usuario,
      httpOptions
    );
  }

  editUsuario(indice: number, usuario: IUsuario): Observable<IUsuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put<IUsuario>(
      `${this._url}/usuarios/${indice}`,
      usuario,
      httpOptions
    );
  }
}
