import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './Login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup
  loginBody: Login
  loginEmail: string;
  loginPassword: string;
  alertLoginMessage = '';


  // email: string;
  // password: string;
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  login() {
    this.loginBody = {
      email: this.email?.value,
      password: this.password?.value
    }
    this.auth.login(this.loginBody).subscribe((res: any) => {
      if(res.token){
        console.log("res.token", res.token)
        localStorage.setItem('token', JSON.stringify(res.token))
        localStorage.setItem("user_id", JSON.stringify(res.user.id))
        this.route.navigate(['parametrage'])
      }
      else{
        this.alertLoginMessage = res.message
        console.log("ya error",res)
      }
    }, (err: any) => { console.log(err) })
    // console.log("email",this.email?.value)
    // console.log("password",this.password?.value)
  }
}
