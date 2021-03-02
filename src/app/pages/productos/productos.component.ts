import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from 'src/app/interfaces/producto-interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public productoService: ProductosService) { }

  ngOnInit(): void {
  }

}
