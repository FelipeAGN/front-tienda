import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comentario} from '../book/Comentario';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentarioServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient,
  ){}


  newComentario(data, id){
    return this.http.post(this.urlEndpoint + 'books/' + id + '/comentario',data);
  }

  getComments(id: string):Observable<Comentario[]>{
    return this.http.get(this.urlEndpoint + 'books/' + id + '/comentarios').pipe(
      map(response=> response as Comentario[]))

  }

}
