import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  listOfItem = ['jack', 'lucy'];
  index = 0;
  src = `/assets/sft4nfZ4.jpg`;
  selectedValue = null;


  // LOGIN
  

  constructor() { }

  ngOnInit(): void {
 
  }

  // SIGN UP

  onSubmit() {
  
  }
  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.listOfItem.indexOf(value) === -1) {
      this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
    }
  }

  // LOGIN

  onLogin() {
 
  }


  onReload(): void {
    this.src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date()}`;
  }

}
