import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlBaseImagemCapaFilmeTMDB = environment.urlBaseImagemCapaFilmeTMDB;
  capasFilmes: any[] = [];
  menuOpened = false;

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
  
  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }

}
