import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PesquisaComponent } from './pesquisa.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';

@NgModule({
    
  declarations: [
    PesquisaComponent,
  ],

  imports: [
    NavBarModule,
    BrowserModule,
    HttpClientModule,
  ],

})

export class PesquisaModule { }