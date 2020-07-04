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
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'book', component: BookComponent},
  {path: 'carro', component: CarritoComponent}

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
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
