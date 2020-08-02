import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PesquisaComponent } from './pesquisa.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MosaicoFilmesModule } from '../mosaico-filmes/mosaico-filmes.module';

@NgModule({
    
  declarations: [
    PesquisaComponent,
  ],

  imports: [
    MosaicoFilmesModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],

})

export class PesquisaModule { }