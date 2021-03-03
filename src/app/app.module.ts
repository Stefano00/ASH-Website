import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapsComponent } from './components/maps/maps.component';

import { TitleComponent } from './components/title/title.component';
import { ClientesComponent } from './components/home/clientes/clientes.component';
import { NuestrosClientesComponent } from './components/home/nuestros-clientes/nuestros-clientes.component';
import { ProveedoresComponent } from './components/home/proveedores/proveedores.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { NosotrosComponent } from './components/home/nosotros/nosotros.component';
import { ExperienciaComponent } from './components/home/experiencia/experiencia.component';
import { FormsModule } from '@angular/forms';
import { CarouselColMaxComponent } from './components/home/nuestros-clientes/carousel-col-max/carousel-col-max.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MapsComponent,
    TitleComponent,
    ClientesComponent,
    NuestrosClientesComponent,
    ProveedoresComponent,
    ServiciosComponent,
    NosotrosComponent,
    ExperienciaComponent,
    CarouselColMaxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
