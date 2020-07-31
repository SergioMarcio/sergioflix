import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesService } from '../app/services/filmes.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './main/home/home.module';
import { PesquisaModule } from './main/pesquisa/pesquisa.module';


@NgModule({

  declarations: [
    AppComponent,
  ],

  imports: [
    HomeModule,
    PesquisaModule,

    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],

  providers: [
    FilmesService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
