import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
