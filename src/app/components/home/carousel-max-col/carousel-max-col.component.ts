import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-max-col',
  templateUrl: './carousel-max-col.component.html',
  styleUrls: ['./carousel-max-col.component.css', '../home.component.css']
})
export class CarouselMaxColComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
