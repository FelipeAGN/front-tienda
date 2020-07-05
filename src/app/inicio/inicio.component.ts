import { Component, OnInit } from '@angular/core';
import {Libro} from '../libros/libro';
import {LibrosServiceService} from '../services/libros-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  libros: Libro[];
  librosRated: Libro[];

  constructor(
    private librosService: LibrosServiceService
  ) { }

  ngOnInit(): void {
    this.librosService.getNewestLibros().subscribe(
      libros=>this.libros = libros

    )

    this.librosService.getBestRated().subscribe(
      librosRated =>this.librosRated = librosRated
    )
  }

}
