import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css', '../home.component.css']
})
export class ProveedoresComponent implements OnInit {

  image: string[];

  constructor() {
    this.image = [
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/AVEVA.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/General Electric.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Pelco.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Phoenix Contact.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Rittal.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Rockwell Automation.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Rockwell System Integrator.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Schneider Aliance Integrator.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Schneider.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/SIEMENS Aliance Integrator.png',
      'assets/images/WEB_ASH_Carpeta/Logo Proveedores/Siemens.png'

    ]
   }

  ngOnInit(): void {
  }

}
