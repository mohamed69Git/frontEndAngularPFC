import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }
  login(data: Login) {
    return this.http.post(environment.url + "login", data)
  }
  isLoggedIn() {
    if (localStorage.getItem('token') == null)
      return false
    else
      return true
  }



}
