import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LupuloInterface } from '../interfaces/lupulo.interface';

@Injectable({
  providedIn: 'root'
})
export class LupuloService {

  lupulo: LupuloInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarLupulo();
   }


  private cargarLupulo() {
    this.http.get('https://lupuloloscastanos-default-rtdb.firebaseio.com/lupulo.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        //regresa los lupulos destacados
        this.lupulo = resp;
        this.cargando = false
      });
  }
}

