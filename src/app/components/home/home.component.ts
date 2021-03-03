import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  title: string[]=[
    'Servicios',
    'Experiencia',
    'Clientes',
    'Nosotros',
    'Contáctanos'
  ];

  form: any = {
    name: '',
    email: '',
    phone: 0,
    consult: '',
    message: ''
  };
  
  inputName: string;
  inputEmail: string;
  inputPhone: number;
  inputConsult: string;
  inputMessage: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  formChange(){
    this.form={
      name: this.inputName,
      email: this.inputEmail,
      phone: this.inputPhone,
      consult: this.inputConsult,
      message: this.inputMessage
    }
  
  }

  onSubmit(){
    console.log(this.form);
  }


}
