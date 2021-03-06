import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { MosaicoFilmesModule } from '../mosaico-filmes/mosaico-filmes.module';

@NgModule({
    
  declarations: [
    HomeComponent,
  ],

  imports: [
    MosaicoFilmesModule,
    BrowserModule,
    HttpClientModule,
  ],

})

export class HomeModule { }
