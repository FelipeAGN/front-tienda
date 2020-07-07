import { Component, OnInit } from '@angular/core';
import {Libro} from '../libros/libro';
import {LibrosServiceService} from '../services/libros-service.service';
import {Cliente} from '../cliente/Cliente';
import {ModalServiceService} from '../services/modal-service.service';
import {ClienteServiceService} from '../services/cliente-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libros: Libro[];
  librosRated: Libro[];

  public cliente ={
    rut:null,
    first_name:null,
    last_name:null,
    email:null,
    address:null
  };

  public error = {email: '', rut: '', first_name: '', last_name: '', address: ''};

  constructor(
    private librosService: LibrosServiceService,
    public modalService : ModalServiceService,
    private clienteService: ClienteServiceService
  ) { }

  ngOnInit(): void {
    this.librosService.getNewestLibros().subscribe(
      libros=>this.libros = libros

    )

    this.librosService.getBestRated().subscribe(
      librosRated =>this.librosRated = librosRated
    )
  }

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
  }




}
