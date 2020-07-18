import { Component, OnInit } from '@angular/core';
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from "./Libro";
import {ModalServiceService} from '../services/modal-service.service';
import {CarritoServiceService} from '../services/carrito-service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[];
  librosNuevos: Libro[];
  librosMejorRating: Libro[];

  public libro={
    id_book:null
  }

  constructor(
    private librosService: LibrosServiceService,
    public modalService: ModalServiceService,
    private carritoService: CarritoServiceService
  ) { }

  filterBook = '';

  ngOnInit(): void {
    this.librosService.getLibros().subscribe(
      libros=>this.libros = libros
    )

    this.librosService.getNewestLibros().subscribe(
      librosNuevos=> this.librosNuevos = librosNuevos
    )

    this.librosService.getBestRated().subscribe(
      librosMejorRating => this.librosMejorRating = librosMejorRating
    )
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

  public handleError(error){
    console.log(error)
  }

  public handleResponse(data){
    console.log(data);
  }

  public setIdLibro(id_libro){
    this.libro.id_book =id_libro;
  }

}
