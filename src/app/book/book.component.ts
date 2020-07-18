import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {LibrosServiceService} from '../services/libros-service.service';
import {ComentarioServiceService} from '../services/comentario-service.service';
import {Libro} from "../libros/Libro";
import {Comentario} from "./Comentario";
import {ModalServiceService} from '../services/modal-service.service';
import {CarritoServiceService} from '../services/carrito-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  libros: Libro;
  comentarios: Comentario[]=[];
  id: string;

  //Objeto para enviar comentario a backend
  public comment = {text: null, commented_by: null, rating: null};

  public libro={id_book:null}

  public error = {text: '', rating: '', commented_by: '', id_book: ''}

  constructor(
    private _route: ActivatedRoute,
    private librosService: LibrosServiceService,
    private comentService: ComentarioServiceService,
    public modalService : ModalServiceService,
    private carritoService : CarritoServiceService
  ){console.log(this._route.snapshot.paramMap.get('id'));}



  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    this.librosService.getLibroById(this.id).subscribe(
      libros=>this.libros = libros
    );
    this.comentService.getComments(this.id).subscribe(
      comentarios=>this.comentarios = comentarios
    );

  }

  onSubmit(){
    console.log(this.comment);

    this.comentService.newComentario(this.comment, this.id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )

    this.comentService.getComments(this.id).subscribe(
      comentarios =>this.comentarios = comentarios
    )

  }



  handleResponse(data){
    console.log(data)
  }

  handleError(error){
    this.error = error.error.errors;
  }

  agregarLibro(id_libro){
    console.log(id_libro);

    this.modalService.abrirModalLibroAgregado();
    this.setIdLibro(id_libro);

    this.carritoService.agregarLibroCarrito(this.libro).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  public setIdLibro(id_libro){
    this.libro.id_book =id_libro;
  }
}
