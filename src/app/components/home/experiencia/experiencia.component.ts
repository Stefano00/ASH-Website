import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css', '../home.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia1: boolean = false;
  experiencia2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  card1(){
    this.experiencia1 = true;
    this.experiencia2 = false;
  
  }
  card2(){
    this.experiencia1 = false;
    this.experiencia2 = true;
   
  }

}
