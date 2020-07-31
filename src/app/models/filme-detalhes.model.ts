export class FilmeDetalhesModel {

    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: GenreModel[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProdutionCompanyModel[];
    production_countries: ProdutionCountryModel[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguagesModel[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

export class GenreModel {
    id: number;
    name: string;
}

export class ProdutionCompanyModel {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export class ProdutionCountryModel {
    iso_3166_1: string;
    name: string;
}

export class SpokenLanguagesModel {
    iso_639_1: string;
    name: string;
}