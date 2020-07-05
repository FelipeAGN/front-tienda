import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfobarComponent } from './infobar/infobar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { CarrouselComponent } from './carrousel/carrousel.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { AutoCompleteSearchComponent } from './auto-complete-search/auto-complete-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'book', component: BookComponent},
  {path:'carro',component:CarroComprasComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LibrosComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    InfobarComponent,
    BookComponent,
    CarrouselComponent,
    CarroComprasComponent,
    AutoCompleteSearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
