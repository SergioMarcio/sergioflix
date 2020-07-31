import { OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input() opened = true;
    @Input() abaSelecionada = 0;
    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private _router: Router,
    ) { }

    ngOnInit() { }

    toggle() {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
    }

    gotoHome(): void {
        this._router.navigate(['']);
    }

    gotoPesquisa(): void {
        this._router.navigate(['pesquisa']);
    }

}