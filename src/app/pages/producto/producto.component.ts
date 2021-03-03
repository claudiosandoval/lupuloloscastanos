import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoCompleto } from 'src/app/interfaces/producto-completo.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoCompleto: ProductoCompleto = {};

  constructor(private route: ActivatedRoute,
              public ProductosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(parametros => {
        console.log(parametros['id']);
        this.ProductosService.getProductos(parametros['id'])
          .subscribe( (producto: ProductoCompleto) => {
            console.log(producto);
            this.productoCompleto = producto;
          });
      })
  }



}
