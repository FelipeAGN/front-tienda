import { Component, OnInit } from '@angular/core';
import {ContactoServiceService} from '../services/contacto-service.service';
import {Contacto} from './Contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactoService: ContactoServiceService
  ) { }

  public form = {
    email: null,
    subject: null,
    message: null
  }

  public error = {
    email: '',
    subject: '',
    message: '',
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    this.contactoService.newMensajeContacto(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    console.log(data)
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
