import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { formModel } from '../Model/formModel';


@Injectable({
    providedIn: 'root'
})

export class FormService {

    constructor(private httpService: HttpClient) {

    }

    formPost(form: formModel): Observable<formModel> {
        console.log(form);
        return this.httpService.post<formModel>('https://localhost:44395/api/form', form);
    }



}
