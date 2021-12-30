import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsConstitutifsService {
  url = "http://127.0.0.1:8000/api/elem-cons-all"

  constructor(private http: HttpClient) { }
  

 


}
