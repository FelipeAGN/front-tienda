import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from "../libros/libro";
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  libros: Libro;
  id: string;

  constructor(private _route: ActivatedRoute, private librosService: LibrosServiceService) {
    console.log(this._route.snapshot.paramMap.get('id'));
    // this.libros = new Libro;
  }
  

  public comentario = {
    mensaje: null
  }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    
    this.librosService.getLibroById(this.id).subscribe(
      libros=>this.libros = libros
    );

    console.log(this.id);
    console.log(this.libros);
  }

  onSubmit(form){
    console.log(this.comentario);
  }
}
