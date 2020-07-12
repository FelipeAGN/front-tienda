import { Component, OnInit } from '@angular/core';
import {Libro} from '../libros/Libro';
import {LibrosServiceService} from '../services/libros-service.service';
import {Cliente} from '../cliente/Cliente';
import {ModalServiceService} from '../services/modal-service.service';
import {ClienteServiceService} from '../services/cliente-service.service';
import {CarritoServiceService} from '../services/carrito-service.service';
import {Carrito} from '../carrito/Carrito';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libros: Libro[];
  librosRated: Libro[];
  public carrito: Carrito[];

  public libro={
    id_book:null
  }

  constructor(
    private librosService: LibrosServiceService,
    public modalService : ModalServiceService,
    private clienteService: ClienteServiceService,
    private carritoService: CarritoServiceService
  ) { }

  ngOnInit(): void {
    this.librosService.getNewestLibros().subscribe(
      libros=>this.libros = libros

    )

    this.librosService.getBestRated().subscribe(
      librosRated =>this.librosRated = librosRated
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

  handleResponse(data){
    console.log(data)
  }

  handleError(error){
    console.log(error)
  }

  public setIdLibro(id_libro){
    this.libro.id_book =id_libro;
  }

}
