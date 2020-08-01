import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: '',
        type: 'group',
        children: [
            {
                id: 'inicio',
                title: 'Início',
                type: 'item',
                icon: 'home',
                url: '/',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id: 'pesquisa',
                title: 'Pesquisar Filme',
                type: 'item',
                icon: 'search',
                url: '/pesquisa',
            }
        ]
    }
];
