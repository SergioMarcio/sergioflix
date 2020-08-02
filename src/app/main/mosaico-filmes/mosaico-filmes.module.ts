    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MosaicoFilmesComponent } from './mosaico-filmes.component';

@NgModule({
    
  declarations: [
    MosaicoFilmesComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],

  exports: [
    MosaicoFilmesComponent,
  ],

})

export class MosaicoFilmesModule { }