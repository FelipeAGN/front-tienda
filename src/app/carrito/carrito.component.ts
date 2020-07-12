import { Component, OnInit } from '@angular/core';
import {Carrito} from './Carrito';
import {CarritoServiceService} from '../services/carrito-service.service';
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from '../libros/Libro';
import {Observable} from 'rxjs';
import {infoPago} from './infoPago';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carritosUsuario : Carrito[];
  public libros: Libro[];
  public montoPago: infoPago;

  public carrito ={
    rut:null,
    id_book:null,
    cantidad_libros:0,
    libro_total:0,
    comprado:false
  }

  public error = {rut: '', id_book: '', cantidad_libros: '', libro_total: '', comprado: ''};


  constructor(
    private carritoService: CarritoServiceService,
    private librosService: LibrosServiceService
  ) { }


  ngOnInit(): void {
    this.carritoService.obtenerCarritos().subscribe(
      carritosUsuario => this.carritosUsuario = carritosUsuario
    )

    this.carritoService.obtenerMontoAPagar().subscribe(
      montoPago => this.montoPago = montoPago
    );
  }

  handleResponse(){
    console.log(true)
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
