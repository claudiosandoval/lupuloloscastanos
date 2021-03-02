import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactoComponent,
    ProductosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
