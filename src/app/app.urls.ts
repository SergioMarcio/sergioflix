import { environment } from '../environments/environment';

const keyTMDB = environment.keyTMDB;

export const AppUrls = {

    filmes: {

        assistido: {

            consultarFilmesAssistidos(): string {
                return 'http://localhost:3000/filmesassistidos';
            },

            adicionarFilmesAssistidos(): string {
                return 'http://localhost:3000/filmesassistidos';
            },

            excluirFilmesAssistidos(idfilme: number): string {
                return 'http://localhost:3000/filmesassistidos/' + idfilme;
            },

        },

        queroVer: {

            consultarFilmesQueroVer(): string {
                return 'http://localhost:3000/filmesquerover';
            },

            adicionarFilmesQueroVer(): string {
                return 'http://localhost:3000/filmesquerover';
            },

            excluirFilmesQueroVer(idfilme: number): string {
                return 'http://localhost:3000/filmesquerover/' + idfilme;
            },

        },

        
        consultarCapaFilme(capafilme: string): string {
            return 'https://image.tmdb.org/t/p/w500' + capafilme;
        },

        consultarListaFilmes(pesquisa: string): string {
            return 'https://api.themoviedb.org/3/search/movie?api_key=' + keyTMDB + '"&language=pt-BR&page=1&include_adult=false&query=' + pesquisa;
        },

        consultarFilme(idfilme: number): string {
            return 'https://api.themoviedb.org/3/movie/' + idfilme + '?api_key=' + keyTMDB + '&language=pt=BR';
        },

    }

};
