import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomeComponent } from './home.component';

@NgModule({
    
  declarations: [
    HomeComponent,
  ],

  imports: [
    NavBarModule,
    BrowserModule,
    HttpClientModule,
  ],

})

export class HomeModule { }
