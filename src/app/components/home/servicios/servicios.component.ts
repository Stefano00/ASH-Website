import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs/operators';
import { ICardModel } from 'src/app/Model/cardModel';

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


  cards: ICardModel[] = [
    { title: 'Asesorías, estudios, desarrollo de ingeniería de detalle y software',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Asesorías.png',
      id: 'card1'
    },
    { title: 'Desarrollo de software para la industria.',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Control.png',
      id: 'card2'
    },
    { title: 'Proyectos y servicios para el control de procesos industriales',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Servicios2.png',
      id: 'card3'
    },
    { title: 'Montaje eléctrico e instrumentación',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Montaje.png',
      id: 'card4'
    },
    { title: 'Sistemas de circuito integrado de televisión (CCTV) industrial y megafonía',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Servicios.png',
      id: 'card5'
    },
    { title: 'Integración de fuerza y control.',
      link: 'http://www.google.cl',
      image: 'assets/images/WEB_ASH_Carpeta/Iconos/1x/Gabinetes.png',
      id: 'card6'
    }
  ]

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
