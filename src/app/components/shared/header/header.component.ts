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

  buscador: boolean;

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
    },
    {
      title: 'Asesorías, estudios, desarrollo de ingeniería de detalle y software',
      href: '#card1'
    },
    {
      title: 'Desarrollo de software para la industria.',
      href: '#card2'
    },
    {
      title: 'Proyectos y servicios para el control de procesos industriales',
      href: '#card3'
    },
    {
      title: 'Montaje eléctrico e instrumentación',
      href: '#card4'
    },
    {
      title: 'Sistemas de circuito integrado de televisión (CCTV) industrial y megafonía',
      href: '#card5'
    },
    {
      title: 'Integración de fuerza y control.',
      href: '#card6'
    },
 
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

  Search(){
    this.buscador= !this.buscador;
  }

}
