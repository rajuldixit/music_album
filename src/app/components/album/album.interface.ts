export interface Items {
  id: number;
  artist: string,
  title: string,
  releaseYear: string,
  genreId: number,
  imageUrl: string,
  genreName: string;
}


export interface FilterationTypes {
  artist: {placeholder: string},
  title: {placeholder: string},
  genres: {
    singleSelection: boolean,
    placeholder: string,
    data: Array<{id: number, itemName: string}>
  },
  year: {
    singleSelection: boolean,
    placeholder: string,
    data: Array<{id: number, itemName: string}>
  },
}

export interface FilterationKeys {
  artist: string,
  title: string,
  year: number,
  genres: Array<string>
}
