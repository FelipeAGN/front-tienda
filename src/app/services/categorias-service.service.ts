import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Libro} from '../libros/Libro';
import {map} from 'rxjs/operators';
import {Categoria} from '../categorias/Categoria';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getCategorias():Observable<Categoria[]>{
    return this.http.get(this.urlEndpoint+'categorias').pipe(
      map(response=> response as Categoria[])
    )
  }

  getLibrosCategoria(idCategory):Observable<Libro[]>{
    return this.http.get(this.urlEndpoint+'categoria/'+idCategory).pipe(
      map(response=> response as Libro[])
    )
  }


}

