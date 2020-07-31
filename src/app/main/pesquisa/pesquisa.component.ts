import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  menuOpened = false;
  constructor() { }

  ngOnInit(): void {
  }

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }

}
