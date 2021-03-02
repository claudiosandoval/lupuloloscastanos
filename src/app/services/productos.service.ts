import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  lupulo: ProductoInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarLupulo();
   }


  private cargarLupulo() {
    this.http.get('https://lupuloloscastanos-default-rtdb.firebaseio.com/lupulo.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        this.lupulo = resp;
        this.cargando = false
      });
  }
}

