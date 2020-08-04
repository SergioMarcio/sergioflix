import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';

export class InformacoesFilme {
    capafilme: string;
    linkfilme: string;
}

@Component({
    selector: 'app-mosaico-filmes',
    templateUrl: './mosaico-filmes.component.html',
    styleUrls: ['./mosaico-filmes.component.scss'],
})
export class MosaicoFilmesComponent implements OnInit {

    @Input() listaFilmes: InformacoesFilme[];
    @Input() tipoListaFilmes: string;

    constructor() { }

    ngOnInit(): void {
     }

}
