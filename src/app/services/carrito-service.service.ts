import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Carrito} from '../carrito/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  /*newCarrito(carrito: { rut: null; id_book: null; libro_total: number; comprado: boolean; cantidad_libros: number }){
    return post(`${this.UrlEndpoint}/crearCarritoEmpty`,data);
  }*/

  newCarrito(data){
    return this.http.post(this.urlEndpoint+ 'crearCarritoEmpty',data);
  }

  obtenerCarritoNuevo():Observable<Carrito[]>{
    return this.http.get('this.urlEndpointcarrito/lastCreated').pipe(
      map(response=>response as Carrito[])
    );
  }


  agregarLibroCarrito(id_libro){
    return this.http.post(`${this.urlEndpoint}libroAcarrito`,id_libro);
  }


}
