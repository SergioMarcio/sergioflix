import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';

@NgModule({
    
  declarations: [
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
  ],

})

export class HomeModule { }
