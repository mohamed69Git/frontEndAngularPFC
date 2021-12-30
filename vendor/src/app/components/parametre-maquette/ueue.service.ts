import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UeueService {
  constructor(private http: HttpClient) { }
  allUe(){
    return this.http.get(environment.url +"allUe")
  }

  addUe(ue: {}){
    return this.http.post(environment.url +"addUe", ue);
  }

}
