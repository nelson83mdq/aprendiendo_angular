import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  public bookList: Array<Book>;
  public libroNombre: String = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.bookList = [
      new Book('El Viejo y el Mar',new Date('1980/05/23'),'Hemingway', 'P&G',100),
      new Book('Mas respeto que soy tu madre',new Date('2005/07/02'),'Casciari', 'Orsai',500),
      new Book('El Aleph',new Date('1980/05/1'),'Borges', 'Editorial Buenos Aires',200),
      new Book('jueguetes Perdidos',new Date('1989/12/3'),'Cortazar', 'Universidad Nacional',150)
    ]
    
  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) =>{
      this.libroNombre = params['someBook'];
    })
  }
}
