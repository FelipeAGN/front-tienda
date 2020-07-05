import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Libro} from '../libros/libro';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/books';
  private anotherUrlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient,
  ){}

  getLibros():Observable<Libro[]>{
    return this.http.get(this.urlEndpoint).pipe(
      map(response=> response as Libro[])
    )
  }

  getNewestLibros():Observable<Libro[]>{
    return this.http.get(this.anotherUrlEndpoint + 'newbooks').pipe(
      map(response=>response as Libro[])
    )
  }

  getBestRated():Observable<Libro[]>{
    return this.http.get(this.anotherUrlEndpoint + 'bestratedbooks').pipe(
      map(response=>response as Libro[])
    )
  }
  getLibroById(id: string):Observable<Libro>{
    return this.http.get(this.anotherUrlEndpoint + 'books/' + id).pipe(
      map(response=> response as Libro)
    )
  }

  /*
  getLibroById(data){
    return this.http.get(`${this.baseUrl}/{id}`,data);
  }*/
  /*getLibros(data){
    return this.http.get(`${this.baseUrl}/books`,data);
  }*/


}
