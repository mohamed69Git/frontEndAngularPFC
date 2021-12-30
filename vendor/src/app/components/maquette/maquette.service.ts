import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaquetteService {

  constructor(private http: HttpClient) { }

  showmaquette(){
    return this.http.get(environment.url +"maquetteShow");
  }
}
