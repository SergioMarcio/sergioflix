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
            {
                id: 'filmes-assistidos',
                title: 'Filmes Assistidos',
                type: 'item',
                icon: 'format_list_bulleted',
                url: '/filmes-assistidos',
            },
            {
                id: 'filmes-quero-ver',
                title: 'Filmes que Quero Ver',
                type: 'item',
                icon: 'format_list_bulleted',
                url: '/filmes-quero-ver',
            },
        ]
    }
];
