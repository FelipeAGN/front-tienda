import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comentario} from '../book/coment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentarioServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/books';
  private anotherUrlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient,
  ){}



  getComentById(id: string):Observable<Comentario[]>{
    return this.http.get(this.anotherUrlEndpoint + 'books/' + id + '/comentarios').pipe(
      map(response=> response as Comentario[])
    )
  }

  newComentario(data, id){
    return this.http.post(this.anotherUrlEndpoint + 'books/' + id + '/comentario',data);
  }
}
