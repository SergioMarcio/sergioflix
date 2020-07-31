import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUrls } from '../app.urls';
import { FilmeDetalhesModel } from '../models/filme-detalhes.model';
import { FilmeResultadoPesquisaModel } from '../models/filme-resultado-pesquisa.model';
import { FilmeModel } from '../models/filme.model';

@Injectable()
export class FilmesService {

    constructor(
        private http: HttpClient,
    ) { }

    consultarFilmesAssistidos(): Observable<FilmeModel[]> {
        const url = AppUrls.filmes.assistido.consultarFilmesAssistidos();
        return this.http.get<FilmeModel[]>(url);
    }

    adicionarFilmesAssistidos(registro: FilmeModel): any {
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        const url = AppUrls.filmes.assistido.adicionarFilmesAssistidos();
        const body = JSON.stringify(registro);
        return this.http.post<FilmeModel>(url, body, options);
    }

    excluirFilmesAssistidos(idfilme: number): any {
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        const url = AppUrls.filmes.assistido.excluirFilmesAssistidos(idfilme);
        return this.http.delete<FilmeModel>(url, options);
    }

    consultarFilmesQuerover(): Observable<FilmeModel[]> {
        const url = AppUrls.filmes.queroVer.consultarFilmesQueroVer();
        return this.http.get<FilmeModel[]>(url);
    }

    adicionarFilmesQueroVer(registro: FilmeModel): any {
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        const url = AppUrls.filmes.queroVer.adicionarFilmesQueroVer();
        const body = JSON.stringify(registro);
        return this.http.post<FilmeModel>(url, body, options);
    }

    excluirFilmesQueroVer(idfilme: number): any {
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        const url = AppUrls.filmes.queroVer.excluirFilmesQueroVer(idfilme);
        return this.http.delete<FilmeModel>(url, options);
    }

    consultarCapaFilme(capafilme: string): string {
        return AppUrls.filmes.consultarCapaFilme(capafilme);
    }

    consultarListaFilmes(pesquisa: string): Observable<FilmeResultadoPesquisaModel[]> {
        const url = AppUrls.filmes.consultarListaFilmes(pesquisa);
        return this.http.get<FilmeResultadoPesquisaModel[]>(url);
    }

    consultarFilme(idfilme: number): Observable<FilmeDetalhesModel> {
        const url = AppUrls.filmes.consultarFilme(idfilme);
        return this.http.get<FilmeDetalhesModel>(url);
    }

}