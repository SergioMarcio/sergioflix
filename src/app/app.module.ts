import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { HomeComponent } from './main/home/home.component';
import { FilmesService } from './services/filmes.service';
import { PesquisaComponent } from './main/pesquisa/pesquisa.component';
import { HomeModule } from './main/home/home.module';
import { PesquisaModule } from './main/pesquisa/pesquisa.module';
import { FilmesAssistidosModule } from './main/filmes-assistidos/filmes-assistidos.module';
import { FilmesQueroVerModule } from './main/filmes-quero-ver/filmes-quero-ver.module';
import { FilmesAssistidosComponent } from './main/filmes-assistidos/filmes-assistidos.component';
import { FilmesQueroVerComponent } from './main/filmes-quero-ver/filmes-quero-ver.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pesquisa', component: PesquisaComponent},
    { path: 'filmes-assistidos', component: FilmesAssistidosComponent },
    { path: 'filmes-quero-ver', component: FilmesQueroVerComponent},
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HomeModule,
        PesquisaModule,
        FilmesAssistidosModule,
        FilmesQueroVerModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule
    ],

    bootstrap: [
        AppComponent
    ],

    providers: [
        FilmesService,
    ]
})
export class AppModule {
}
