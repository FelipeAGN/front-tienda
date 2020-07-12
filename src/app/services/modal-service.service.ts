import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  modal: boolean=false;

  constructor() { }


  cerrarModal(){
    this.modal=false;
  }

  abrirModalLibroAgregado(){
    this.modal=true;
  }

}


