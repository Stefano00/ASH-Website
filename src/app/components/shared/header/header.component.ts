import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../home/home.component.css']
})
export class HeaderComponent implements OnInit {

  search: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  searchButton(){
    this.search = !this.search;
  }

}
