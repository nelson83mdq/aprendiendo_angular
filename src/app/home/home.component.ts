import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public login: boolean;
  constructor(){
      this.login = true;
  }
    Log(){
      this.login = !this.login;
    }
}
