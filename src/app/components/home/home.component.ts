import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardBoolean1: boolean = false;
  cardBoolean2: boolean = false;
  cardBoolean3: boolean = false;
  cardBoolean4: boolean = false;

  title: string[]=[
    'Servicios',
    'Experiencia',
    'Clientes',
    'Nosotros',
    'Contáctanos'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  card1(){
    this.cardBoolean1 = true;
  }
  card2(){
    this.cardBoolean2 = true;
  }
  card3(){
    this.cardBoolean3 = true;
  }
  card4(){
    this.cardBoolean4 = true;
  }

}
