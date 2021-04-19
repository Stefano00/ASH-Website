import { Component, OnInit } from '@angular/core';
import { formModel } from 'src/app/Model/formModel';
import { FormService } from 'src/app/service/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  title: string[] = [
    'Servicios',
    'Experiencia',
    'Clientes',
    'Nosotros',
    'Contáctanos'
  ];

  form: formModel = {
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
  cargandoFormulario: boolean;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  formChange() {
    this.form = {
      name: this.inputName,
      email: this.inputEmail,
      phone: this.inputPhone,
      consult: this.inputConsult,
      message: this.inputMessage
    }

  }

  onSubmit() {

    Swal.fire({
      title: `¿Desea enviar el formulario?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.form.name === '' || this.form.phone === 0 || this.form.email === '' || this.form.consult === '' || this.form.message === '') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor rellene los campos correctamente!',
          })
        } else {
          this.cargandoFormulario = true;
          this.formService.formPost(this.form).subscribe( (data: any) => {
            if(data){
              this.cargandoFormulario = false;
              Swal.fire(
                'Mensaje enviado con exito',
                'Pulse para continuar',
                'success'
              )
      
            }else{
              this.cargandoFormulario = false;
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor inténtelo nuevamente',
              })
            }
            
          }, (error: any) => {
            this.cargandoFormulario = false;
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor inténtelo nuevamente',
              })
            })
        }
      } 

    });
  }


}
