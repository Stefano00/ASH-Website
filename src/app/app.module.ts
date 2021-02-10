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



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MapsComponent,
    TitleComponent,
    ClientesComponent,
    NuestrosClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
