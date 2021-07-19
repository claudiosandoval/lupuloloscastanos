import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductosInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  

  private cargarProductos() {
    this.http.get('https://lupuloloscastanos-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        //regresa todos los productos de la pestaña productos
        //console.log(resp);
        this.productos = resp;
        this.cargando = false
      });
  }

  getProductos(id: string) {
    //Se regresa la definicion de este obserbable, regresa el producto "completo con sus descripciones" el cual es seleccionado desde mas información
    return this.http.get(`https://lupuloloscastanos-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }
}
