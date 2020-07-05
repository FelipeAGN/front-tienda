import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public formulario = {
    email: null,
    subject: null,
    content: null
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formulario);
  }

}
