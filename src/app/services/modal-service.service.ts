import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  modal: boolean=false;

  constructor() { }

  abrirModal(){
    this.modal=true;
  }

  cerrarModal(){
    this.modal=false;
  }

}


