import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../home/home.component.css']
})
export class HeaderComponent implements OnInit {

  search: boolean;
  toSearch: any = [];
  inputSearch: string;
  filter: any = [];
  newList: any = [];

  constructor() {
    this.toSearch = [{
      title: 'Inicio',
      href: '#'
    },
    {
      title: 'Servicios',
      href: '#sec-1'
    },
    {
      title: 'Experiencia',
      href: '#sec-2'
    },
    {
      title: 'Clientes',
      href: '#sec-3'
    },
    {
      title: 'Nosotros',
      href: '#sec-4'
    },
    {
      title: 'Contáctanos',
      href: '#sec-5'
    }
 
    ]
  }


  ngOnInit(): void {

  }

  searchButton() {
    console.log("boton")
  }

  onChange(e: any) {
    let list: any = [];
    this.toSearch.forEach(element => {
      list.push(element.title.toUpperCase());
    });
    this.filter = list.filter(word => word.includes(e.toUpperCase()));
    const uniqueFilter = [...new Set(this.filter)]
    this.newFilter(uniqueFilter);
    if(e.length < 3){
      this.search = false;
    }else{
      this.search = true;
    }
  }

  newFilter(filter){
    this.newList=[];
    this.toSearch.forEach( (element) => {
      filter.forEach( (elementFilter) => {
        if(element.title.toUpperCase() === elementFilter.toUpperCase()){
          this.newList.push(element);
        }
      })
    });
  }

}
