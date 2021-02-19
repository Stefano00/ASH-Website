import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../home/home.component.css']
})
export class HeaderComponent implements OnInit {

  search: boolean;
  toSearch: any = [];
  constructor() { 
    this.toSearch=[
      'Servicios',
      'Experiencia',

    ]
    
  }

  ngOnInit(): void {
  
  }

  searchButton(){
    this.search = !this.search;
  }


  onChange(){
    this.search = true;
  }

 
}
