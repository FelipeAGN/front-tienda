import { Component, OnInit } from '@angular/core';
import {Carrito} from './Carrito';
import {CarritoServiceService} from '../services/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carritosUsuario : Carrito[];

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
  ) { }


  ngOnInit(): void {
    this.carritoService.newCarrito(this.carrito).subscribe(
      data=> this.handleResponse(),
      error => this.handleError(error)
    )

    this.carritoService.obtenerCarritoNuevo().subscribe(
      carritosUsuario => this.carritosUsuario = carritosUsuario
    )
  }

  handleResponse(){
    console.log(true)
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
