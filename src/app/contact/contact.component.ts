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
    content: null
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
  }

}
