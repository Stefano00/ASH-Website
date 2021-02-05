import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = -33.599889365590265;
  lng = -70.71307697028443;

  constructor() { }

  ngOnInit(): void {
  }

}

