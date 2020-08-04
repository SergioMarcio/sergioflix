    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MosaicoFilmesComponent } from './mosaico-filmes.component';
import { MatButtonModule } from '@angular/material/button';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';

@NgModule({
    
  declarations: [
    MosaicoFilmesComponent,
  ],

  imports: [
    MatButtonModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],

  exports: [
    MosaicoFilmesComponent,
  ],

})

export class MosaicoFilmesModule { }