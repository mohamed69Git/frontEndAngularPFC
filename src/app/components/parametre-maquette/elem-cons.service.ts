import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElemConsService {
 
  constructor(private http: HttpClient) { }
  findElementConstitutif() {
    return this.http.get(environment.url + "elemconsall")

  }

  addEc(ec: {}) {
    return this.http.post(environment.url + "addEc", ec);
  }
}
