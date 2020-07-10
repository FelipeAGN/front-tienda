import { Component, OnInit } from '@angular/core';
import {CategoriasServiceService} from '../services/categorias-service.service';
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from '../libros/libro';
import {Categoria} from './Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  libros: Libro[];
  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriasServiceService,
    private libroService: LibrosServiceService
  ) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(
      libros=>this.libros = libros
    )

    this.categoriaService.getCategorias().subscribe(
      categorias =>
      {
        if(categorias !=null){
          this.categorias = categorias

        }
        //console.log(this.categorias[0].id_category);
      }
      );

  }

  onSelectCheckbox(idCategory){
    console.log(idCategory);
    this.categoriaService.getLibrosCategoria(idCategory).subscribe(
      libros => this.libros = libros
    )
  }

}
