import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private UrlEndpoint = 'http://localhost:8000/api';

  constructor(
    private http:HttpClient
  ) { }

  newUser(data){
    return this.http.post(`${this.UrlEndpoint}/crearusuario`, data)
  }

}
