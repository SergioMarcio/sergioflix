import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { FilmesService } from 'app/services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlBaseImagemCapaFilmeTMDB = environment.urlBaseImagemCapaFilmeTMDB;
  capasFilmes: any[] = [];

  constructor(
    private _filmesService: FilmesService,
  ) { }

  ngOnInit(): void {
    this.buscaFilmesAssistidos();
  }

  buscaFilmesAssistidos(): void {
    this._filmesService.consultarFilmesAssistidos().subscribe(
      filmesAssistidos => {
        if (filmesAssistidos.length > 0) {
          for (let i = 0; i < filmesAssistidos.length; i++) {
            this.capasFilmes[i] = this.urlBaseImagemCapaFilmeTMDB + filmesAssistidos[i]?.poster_path;
          }
        }
      }
    )
  }

}
