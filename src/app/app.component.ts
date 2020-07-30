import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 1',
    relevance: 98,
    age: 0,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem Espacial']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 2',
    relevance: 90,
    age: 12,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem Espacial']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 3',
    relevance: 80,
    age: 14,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem Espacial']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galáxia 4',
    relevance: 70,
    age: 16,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem Espacial']
  }]

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }

}
