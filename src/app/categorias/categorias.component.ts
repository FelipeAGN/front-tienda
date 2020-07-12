import { Component, OnInit } from '@angular/core';
import {CategoriasServiceService} from '../services/categorias-service.service';
import {LibrosServiceService} from '../services/libros-service.service';
import {Libro} from '../libros/Libro';
import {Categoria} from './Categoria';
import {ModalServiceService} from '../services/modal-service.service';
import {ClienteServiceService} from '../services/cliente-service.service';
import {CarritoServiceService} from '../services/carrito-service.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  libros: Libro[];
  categorias: Categoria[];

  filterBook = '';

  constructor(
    private categoriaService: CategoriasServiceService,
    private libroService: LibrosServiceService,
    public modalService : ModalServiceService,
    private clienteService: ClienteServiceService,
    private carritoService: CarritoServiceService
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
  allBooks(){
    this.libroService.getLibros().subscribe(
      libros=>this.libros = libros
    )
  }

  agregarLibro(id_libro){
    this.modalService.abrirModalLibroAgregado();
    this.carritoService.agregarLibroCarrito(id_libro);
  }

}
