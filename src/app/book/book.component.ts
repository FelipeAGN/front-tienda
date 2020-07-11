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
  aleatorio = Math.floor(Math.random()*1000);
  comentarios: Comentario[];
  id: string;

  //Objeto para enviar comentario a backend

  public comment = {
    text: null,
    commented_by: null,
    rating: null
  };


  constructor(private _route: ActivatedRoute,
              private librosService: LibrosServiceService,
              private comentService: ComentarioServiceService) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  public error = {text: '',
                  rating: '',
                  comment_by: '',
                  id_book: ''
                }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

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

  onSubmit(){
    console.log(this.comment);

    this.comentService.newComentario(this.comment, this.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )

  }

  handleResponse(data){
    console.log(data)
  }

  handleError(error){
    this.error = error.error.errors;
  }
}
