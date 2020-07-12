import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  private urlEndpoint: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  newMensajeContacto(){

  }
}
