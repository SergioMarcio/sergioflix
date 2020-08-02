import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FilmeResultadoPesquisaModel } from 'app/models/filme-resultado-pesquisa.model';
import { FilmesService } from 'app/services/filmes.service';

export class InformacoesFilme {
  capafilme: string;
  linkfilme: string;
}

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  textoPesquisa = '';
  urlBaseImagemCapaFilmeTMDB = environment.urlBaseImagemCapaFilmeTMDB;
  filmesEncontrados: FilmeResultadoPesquisaModel = new FilmeResultadoPesquisaModel();
  infoFilmes: InformacoesFilme[];
  totalPaginas: number;
  filmeSemCapa = './../../../assets/images/sem_capa.png'
  botoesNavegacaoVisiveis = false;
  paginaAtual = 1;

  constructor(
    private _filmesService: FilmesService,
  ) { }

  ngOnInit(): void {
    this.paginaAtual = 1;
  }

  pesquisaFilmes(): void {
    this.paginaAtual = 1;
    this.pesquisaFilmesPorPagina()
  }
  
  paginaAnterior(): void {
    this.paginaAtual = this.paginaAtual - 1;
    this.pesquisaFilmesPorPagina();
  }

  paginaSeguinte(): void {
    this.paginaAtual = this.paginaAtual + 1;
    this.pesquisaFilmesPorPagina();
  }

  pesquisaFilmesPorPagina() {
    this.infoFilmes = [];

    this._filmesService.consultarListaFilmes(this.textoPesquisa, this.paginaAtual).subscribe(
      data => {
        this.filmesEncontrados = data;
        console.log(data);
        if (data.results.length > 0) {

          if (data.total_pages > 1) {
            this.botoesNavegacaoVisiveis = true;
          } else {
            this.botoesNavegacaoVisiveis = false;
          }

          for (let i = 0; i < data.results.length; i++) {
            let filme = new InformacoesFilme();

            if (this.filmesEncontrados.results[i].poster_path === null) {
              filme.capafilme = this.filmeSemCapa;
              filme.linkfilme = 'https://www.themoviedb.org/movie/' + this.filmesEncontrados.results[i].id;

            } else {
              filme.capafilme = this.urlBaseImagemCapaFilmeTMDB + this.filmesEncontrados.results[i].poster_path;
              filme.linkfilme = 'https://www.themoviedb.org/movie/' + this.filmesEncontrados.results[i].id;

            }
            this.infoFilmes.push(filme)
          }
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

}
