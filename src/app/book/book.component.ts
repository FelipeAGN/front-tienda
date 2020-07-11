import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {LibrosServiceService} from '../services/libros-service.service';
import {ComentarioServiceService} from '../services/comentario-service.service';
import {Libro} from "../libros/libro";
import {Comentario} from "./coment";
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  libros: Libro;
  // coment: Comentario;
  comentarios: Comentario[];
  id: string;
  public coment = {
    text: null,
    id_book: null,
    comment_by: 'pepe',
    rating: 3
  } ;

  constructor(private _route: ActivatedRoute, 
              private librosService: LibrosServiceService, 
              private comentService: ComentarioServiceService) {
    console.log(this._route.snapshot.paramMap.get('id'));
    // this.libros = new Libro;
    // this.coment = new Comentario;
    
  }
  
  public error = {text: '',
                  rating: '',
                  comment_by: '',
                  id_book: ''
                }
  
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.coment.comment_by = 'pepe';
    this.coment.id_book = this.id;
    this.coment.rating = 4;
    
    this.librosService.getLibroById(this.id).subscribe(
      libros=>this.libros = libros
    );
    this.comentService.getComentById(this.id).subscribe(
      comentarios=>this.comentarios = comentarios
    );

    console.log(this.id);
    console.log(this.libros);
    console.log(this.comentarios);
  }

  onSubmit(form){
    console.log(this.comentarios);
    console.log(this.coment);
    this.comentService.newComentario(this.coment, this.id).subscribe(
      data=>this.handleResponse(),
      error=>this.handleError(error)
    );
  }

  handleResponse(){
    console.log(true)
  }

  handleError(error){
    this.error = error.error.errors;
  }
}
