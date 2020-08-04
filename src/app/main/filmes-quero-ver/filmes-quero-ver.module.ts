import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MosaicoFilmesModule } from '../mosaico-filmes/mosaico-filmes.module';
import { FilmesQueroVerComponent } from './filmes-quero-ver.component';

@NgModule({
    
  declarations: [
    FilmesQueroVerComponent,
  ],

  imports: [
    MosaicoFilmesModule,
    BrowserModule,
    HttpClientModule,
  ],

})

export class FilmesQueroVerModule { }
