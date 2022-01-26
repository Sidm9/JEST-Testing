export interface MovieDetails {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: (RatingsEntity)[] | null;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;  
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface RatingsEntity {
  Source: string;
  Value: string;
}

export interface Search {
  Title: string;
  Year?: string;
  imdbID?: string;
  Type?: string;  
  Poster?: string;
}

export interface SearchResponse {
  Search: [Search];
  totalResults: string;
  Response: string;
}

export interface getMovieByNameAndPlotQuery {
  Title: string
  Plot?: string
}