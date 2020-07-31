import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PesquisaComponent } from './main/pesquisa/pesquisa.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'pesquisa', component: PesquisaComponent, },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
