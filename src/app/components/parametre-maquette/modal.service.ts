import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http: HttpClient) { }
  allModalite(){
    return this.http.get(environment.url +"allModalite");
  }

  addModalite(modalite: {}) {
    return this.http.post(environment.url + "addModalite", modalite)
  }



}
