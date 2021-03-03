import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-col-max',
  templateUrl: './carousel-col-max.component.html',
  styleUrls: ['./carousel-col-max.component.css']
})
export class CarouselColMaxComponent implements OnInit {

 
  @Input() image: string;


  constructor() {
  
  }

  ngOnInit(): void {
  }

}
