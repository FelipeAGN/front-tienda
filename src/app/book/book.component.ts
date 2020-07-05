import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  public comentario = {
    mensaje: null
  }
  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.comentario);
  }
}
