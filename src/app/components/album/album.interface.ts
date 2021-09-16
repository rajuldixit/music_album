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

export enum LoadingState {
  LOADING = 'LOADING',
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED'
}

 export enum IllustrationMessages {
   SOMETHING_WENT_WRONG = 'SOMETHING WENT WRONG',
   NO_RECORD_FOUND = 'NO RECORD FOUND'
 }
