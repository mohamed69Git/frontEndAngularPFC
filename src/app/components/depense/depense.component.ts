import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {

  @Input() isDepense: boolean;
  @Output() myChange = new EventEmitter()


  depense: any
  description: string = 'baba'
  color = false
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get name() {
    return this.form.get('name')
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get password_confirmation() {
    return this.form.get('password_confirmation')
  }

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.getAllData()
  }


  getAllData() {
    this.dataSrv.getData().subscribe((response) => {
      this.depense = response
      console.log(this.depense)

    }, (error) => {
      console.log('ERROR DANS LA REQUete')
    })



  }
}
