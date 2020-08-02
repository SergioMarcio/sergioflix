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
                url: '/home',
            },
            {
                id: 'pesquisa',
                title: 'Pesquisar Filme',
                type: 'item',
                icon: 'search',
                url: '/pesquisa',
            },
        ]
    }
];
