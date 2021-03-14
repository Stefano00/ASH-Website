import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-clientes',
  templateUrl: './nuestros-clientes.component.html',
  styleUrls: ['./nuestros-clientes.component.css', '../home.component.css']
})
export class NuestrosClientesComponent implements OnInit {

  image: string[];

  constructor() {
    this.image = [
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/AES Gener.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ANGLOAMERICAN.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ARAUCO.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Cementos Bio Bio.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/CMPC.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/CODELCO.jpg',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/COLBUN.jpg',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Emerson.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ENAP.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ENDESA.jpg',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ENEL.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/ESVAL.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Generadora Metropolitana.jfif',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/HUACHIPATO.jpg',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/KGHM.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/METRO VALPARAISO.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Minera Candelaria.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/MINERA ESCONDIDA.jpg',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/POLPAICO.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Puerto Ventanas.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/SCHNEIDER.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/Sigdo Koppers.png',
      'assets/images/WEB_ASH_Carpeta/Logo Clientes/VEOLIA.png'
    ]
  }
  ngOnInit(): void {
  }

}
