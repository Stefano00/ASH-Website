import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { formModel } from '../Model/formModel';


@Injectable({
    providedIn: 'root'
})

export class FormService {

    constructor( private httpService: HttpClient ) {
       
    }

    formPost(form: formModel){
        console.log('estoy en el formService');
        this.httpService.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe( (data:any) => {
            console.log(data);
        } )
    }

    

}
