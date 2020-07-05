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
  librosNuevos: Libro[];
  librosMejorRating: Libro[];

  constructor(
    private librosService: LibrosServiceService
  ) { }

  filterBook = '';

  ngOnInit(): void {
    this.librosService.getLibros().subscribe(
      libros=>this.libros = libros
    )

    this.librosService.getNewestLibros().subscribe(
      librosNuevos=> this.librosNuevos = librosNuevos
    )

    this.librosService.getBestRated().subscribe(
      librosMejorRating => this.librosMejorRating = librosMejorRating
    )
  }


}
