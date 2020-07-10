import { Component, OnInit } from '@angular/core';
import {Libro} from '../libros/libro';
import {LibrosServiceService} from '../services/libros-service.service';
import {Cliente} from '../cliente/Cliente';
import {ModalServiceService} from '../services/modal-service.service';
import {ClienteServiceService} from '../services/cliente-service.service';
import {CarritoServiceService} from '../services/carrito-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libros: Libro[];
  librosRated: Libro[];


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

    this.carritoService.agregarLibroCarrito(id_libro)
  }
/*
  abrirModal(){
    this.modalService.abrirModal();
  }

  cerrarModal(){
    this.modalService.cerrarModal();
  }


  onSubmit(){
    //console.log(this.cliente);
    this.clienteService.newUser(this.cliente).subscribe(
      data=> this.handleResponse(),
      error => this.errorHandler(error)
    )

  }

  public handleResponse(){
    console.log(true);
  }

  public errorHandler(error){
    this.error = error.error.errors;
  }*/




}
