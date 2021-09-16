export interface Genres {
  id: number;
  name: string;
}

export interface Videos {
  id: number;
  artist: string,
  title: string,
  releaseYear: string,
  genreId: number,
  imageUrl: string,
  genreName: string;
}
