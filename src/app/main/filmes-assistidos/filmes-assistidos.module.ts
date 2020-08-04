import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MosaicoFilmesModule } from '../mosaico-filmes/mosaico-filmes.module';
import { FilmesAssistidosComponent } from './filmes-assistidos.component';

@NgModule({
    
  declarations: [
    FilmesAssistidosComponent,
  ],

  imports: [
    MosaicoFilmesModule,
    BrowserModule,
    HttpClientModule,
  ],

})

export class FilmesAssistidosModule { }
