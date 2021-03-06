import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Carrito} from '../carrito/Carrito';
import {infoPago} from '../carrito/infoPago';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient
  ) { }


  agregarLibroCarrito(data){
    return this.http.post(this.urlEndpoint+ 'crearCarritoConLibro',data);
  }

  obtenerCarritos():Observable<Carrito[]>{
    return this.http.get(this.urlEndpoint + 'carritos').pipe(
      map(response=>response as Carrito[])
    );
  }

  obtenerMontoAPagar():Observable<infoPago>{
    return this.http.get(this.urlEndpoint+'carrito').pipe(
      map(response=> response as infoPago)
    )
  }

  pagarCarritos(){
    return this.http.delete(this.urlEndpoint+ 'pagar');
  }

  VaciarCarritos(){
    return this.http.delete(this.urlEndpoint+ 'pagar');
  }

  aumentarLibro(data){
    return this.http.put(this.urlEndpoint+'aumentarlibro',data);
  }

  disminuirLibro(data){
    return this.http.put(this.urlEndpoint+'disminuirlibro',data);
  }

  quitarCarrito(data){
    return this.http.delete(this.urlEndpoint+'quitarcarrito',data);
  }

  /*pagarCarritos(){
    return this.http.post(this.urlEndpoint)
  }*/

}
