import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  public user: Usuario;
  public d: Date;
  constructor(){
    this.d = new Date();
    this.user= new Usuario('','','',this.d,0);
  }

  onSubmit(){
    //console.log("hola "+ this.value + "!!!!");
    console.log(this.user);
    
  }  

}
