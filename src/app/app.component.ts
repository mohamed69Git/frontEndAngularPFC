import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  onTouched(nom: string){
    console.log('depense has been touched', nom)
  }

  post = {
    isDepense: true
  }
}
