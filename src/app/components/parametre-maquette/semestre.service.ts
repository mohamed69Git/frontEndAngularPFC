import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SemestreInterface } from './SemestreInterface';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  constructor(private http: HttpClient) { }

  allSem(){
    return this.http.get(environment.url +"allSem");
  }

  addSem(numero: {}){
    return this.http.post(environment.url +"addSemestre", numero);
  }
}
