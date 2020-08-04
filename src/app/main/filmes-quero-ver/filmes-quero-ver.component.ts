import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { FilmesService } from 'app/services/filmes.service';
import { HttpErrorResponse } from '@angular/common/http';

export class InformacoesFilme {
  capafilme: string;
  linkfilme: string;
}

@Component({
  selector: 'app-filmes-quero-ver',
  templateUrl: './filmes-quero-ver.component.html',
  styleUrls: ['./filmes-quero-ver.component.scss']
})
export class FilmesQueroVerComponent implements OnInit {

  urlBaseImagemCapaFilmeTMDB = environment.urlBaseImagemCapaFilmeTMDB;
  capasFilmes: any[] = [];
  filmeSemCapa = './../../../assets/images/sem_capa.png'
  infoFilmes: InformacoesFilme[];

  constructor(
    private _filmesService: FilmesService,
  ) { }

  ngOnInit(): void {
    this.buscaFilmesAssistidos();
  }

  buscaFilmesAssistidos(): void {

    this.infoFilmes = [];

    this._filmesService.consultarFilmesAssistidos().subscribe(
      filmesAssistidos => {

        console.log(filmesAssistidos)

        if (filmesAssistidos.length > 0) {

          for (let i = 0; i < filmesAssistidos.length; i++) {

            let filme = new InformacoesFilme();

            if (filmesAssistidos[i].poster_path === null) {
              filme.capafilme = this.filmeSemCapa;
              filme.linkfilme = 'https://www.themoviedb.org/movie/' + filmesAssistidos[i].id;

            } else {
              filme.capafilme = this.urlBaseImagemCapaFilmeTMDB + filmesAssistidos[i].poster_path;
              filme.linkfilme = 'https://www.themoviedb.org/movie/' + filmesAssistidos[i].id;

            }
            this.infoFilmes.push(filme)

          }

        }

      }),
      (error: HttpErrorResponse) => {
        console.log(error)
      }
  }

}
