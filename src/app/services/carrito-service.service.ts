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


  agregarLibroCarrito(data){
    return this.http.post(this.urlEndpoint+ 'crearCarritoConLibro',data);
  }

  obtenerCarritos():Observable<Carrito[]>{
    return this.http.get(this.urlEndpoint + 'carritos').pipe(
      map(response=>response as Carrito[])
    );
  }



}
