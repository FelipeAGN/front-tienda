import { Component, OnInit } from '@angular/core';
import {Carrito} from './Carrito';
import {CarritoServiceService} from '../services/carrito-service.service';
import {Libro} from '../libros/Libro';
import {infoPago} from './infoPago';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public modal =false;
  public carritosUsuario : Carrito[];
  public libros: Libro[];
  public montoPago: infoPago;

  public carrito ={rut:null, id_book:null, cantidad_libros:0, libro_total:0, comprado:false}

  public error = {rut: '', id_book: '', cantidad_libros: '', libro_total: '', comprado: ''};

  constructor(
    private carritoService: CarritoServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.carritoService.obtenerCarritos().subscribe(
      carritosUsuario => this.carritosUsuario = carritosUsuario
    )

    this.carritoService.obtenerMontoAPagar().subscribe(
      montoPago => this.montoPago = montoPago
    );
  }

  cerrarModal(){
    this.modal=false;
  }

  abrirModal(){
    this.modal=true;
    this.carritoService.pagarCarritos().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  public aumentarLibro(carritoElement: Carrito){
    console.log(carritoElement);
    this.carritoService.aumentarLibro(carritoElement).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public disminuirLibro(carritoElement: Carrito){
    console.log(carritoElement);
    this.carritoService.disminuirLibro(carritoElement).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public quitarCarrito(carritoElement: Carrito){
    console.log(carritoElement);
    this.carritoService.quitarCarrito(carritoElement).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  public handleResponse(data){
    this.router.navigateByUrl('carro');
  }

  public handleError(error){
    this.error=error.error.errors;
  }

}
