import { Component, OnInit } from '@angular/core';
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from "./libro";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[];

  constructor(
    private librosService: LibrosServiceService
  ) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe(
      libros=>this.libros = libros
    )
  }

}
