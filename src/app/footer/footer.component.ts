import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autors: any = {
    nombre1: 'Pablo Ábrego',
    nombre2: 'Felipe Guajardo',
    nombre3: 'Pablo Oñate'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
