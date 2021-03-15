import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css', '../home.component.css']
})
export class ServiciosComponent implements OnInit {

  
  cardBoolean1: boolean = false;
  cardBoolean2: boolean = false;
  cardBoolean3: boolean = false;
  cardBoolean4: boolean = false;
  cardBoolean5: boolean = false;
  cardBoolean6: boolean = false;
  cardBoolean7: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  
  card1(){
    this.cardBoolean1 = true;
    this.cardBoolean2 = false;
    this.cardBoolean3 = false;
    this.cardBoolean4 = false;
    this.cardBoolean5 = false;
    this.cardBoolean6 = false;
    this.cardBoolean7 = false;
  }
  card2(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = true;
    this.cardBoolean3 = false;
    this.cardBoolean4 = false;
    this.cardBoolean5 = false;
    this.cardBoolean6 = false;
    this.cardBoolean7 = false;
  }
  card3(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = false;
    this.cardBoolean3 = true;
    this.cardBoolean4 = false;
    this.cardBoolean5 = false;
    this.cardBoolean6 = false;
    this.cardBoolean7 = false;
  }
  card4(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = false;
    this.cardBoolean3 = false;
    this.cardBoolean4 = true;
    this.cardBoolean5 = false;
    this.cardBoolean6 = false;
    this.cardBoolean7 = false;
  }
  card5(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = false;
    this.cardBoolean3 = false;
    this.cardBoolean4 = false;
    this.cardBoolean5 = true;
    this.cardBoolean6 = false;
    this.cardBoolean7 = false;
  }
  card6(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = false;
    this.cardBoolean3 = false;
    this.cardBoolean4 = false;
    this.cardBoolean5 = false;
    this.cardBoolean6 = true;
    this.cardBoolean7 = false;
  }
  card7(){
    this.cardBoolean1 = false;
    this.cardBoolean2 = false;
    this.cardBoolean3 = false;
    this.cardBoolean4 = false;
    this.cardBoolean5 = false;
    this.cardBoolean6 = false;
    this.cardBoolean7 = true;
  }

}
