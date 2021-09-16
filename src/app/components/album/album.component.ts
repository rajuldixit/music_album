import { FilterAlbumManager } from './../../manager/filterAlbum/filter-album.service';
import { DataManager } from './../../manager/data-manager/data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Items, FilterationTypes, FilterationKeys, LoadingState, IllustrationMessages } from './album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  items: Items[];
  album: Items[];
  showIllustration: boolean;
  loadingState: string;
  filterationType: FilterationTypes;
  filterationKeys: FilterationKeys;
  pageTitle: string;
  illustrationString: string;
  showMobileFilters:boolean;

  constructor(private dataManager: DataManager, private filterAlbumManager: FilterAlbumManager) {}

  ngOnInit(): void {
    this.init();
    this.retrieveData();
  }

  init() {
    this.loadingState = LoadingState.LOADING;
    this.pageTitle = 'Album';
    this.showMobileFilters = false;
    this.illustrationString = '';
    this.showIllustration = false;
    this.items =  new Array<Items>();
    this.album = new Array<Items>();
    this.filterationType = {
      artist: {placeholder: 'Search By Artist'},
      title: {placeholder: 'Search By Title'},
      genres: {singleSelection: false, placeholder: 'Select Genres', data: []},
      year: {singleSelection: true, placeholder: 'Select Year', data: []}
    };
    this.filterationKeys = {
      artist: '',
      title: '',
      year: 0,
      genres: new Array()
    };
  }

  retrieveData() {
    this.dataManager.retrieveData().then(response => {
      if(response) {
        this.loadingState = LoadingState.SUCCESS;
        this.filterationType.genres = {
          singleSelection: false,
          placeholder: 'Select Genre',
          data: this.getGenres(response['genres'])
        };
        this.filterationType.year = {
          singleSelection: true,
          placeholder: 'Select Year',
          data: this.getYears(response['videos'])
        };
        this.filterationType.title = {
          placeholder: 'Search Title'
        };
        this.filterationType.artist = {
          placeholder: 'Search Artist'
        };
        if(Object.keys(response['videos']).length > 0) {
          this.items = Object.values(response['videos']);
          this.album = Object.values(response['videos']);
          this.showIllustration = false;
          this.illustrationString = '';
        } else {
          this.showIllustration = true;
          this.illustrationString = IllustrationMessages.NO_RECORD_FOUND;
        }
      } else {
        this.loadingState = LoadingState.FAILED;
        this.showIllustration = true;
        this.illustrationString = IllustrationMessages.SOMETHING_WENT_WRONG;
      }
    });
  }

  showHideFilter() {
    this.showMobileFilters = !this.showMobileFilters;
  }
  getYears(list) {
    let releasingYear = new Array();
    let uniqueYears = [...new Set(list.map(item => item.releaseYear))];
    uniqueYears = uniqueYears.sort();
    let i = 1;
    uniqueYears.forEach(element => {
      let year = {
        id: i++,
        itemName: element
      }
      releasingYear.push(year);
    });
    return releasingYear;
  }

  getGenres(list) {
    let genresList = new Array();
    let i = 1;
    list.forEach(element => {
      let genreName = {
        id: i++,
        itemName: element.name
      }
      genresList.push(genreName);
    });
    return genresList;
  }

  onFilterByArtist(e) {
    this.filterationKeys = {
      artist: e.target.value,
      title: this.filterationKeys.title,
      genres: this.filterationKeys.genres,
      year: this.filterationKeys.year
    };
    const newAlbum = this.filterAlbumManager.filter(this.filterationKeys, this.album);
    this.updateItems(newAlbum);
  }

  onFilterByTitle(e) {
    this.filterationKeys = {
      artist: this.filterationKeys.artist,
      title: e.target.value,
      genres: this.filterationKeys.genres,
      year: this.filterationKeys.year
    };
    const newAlbum = this.filterAlbumManager.filter(this.filterationKeys, this.album);
    this.updateItems(newAlbum);
  }

  onFilterByGenres(e) {
    this.filterationKeys = {
      artist: this.filterationKeys.artist,
      title: this.filterationKeys.title,
      genres: e,
      year: this.filterationKeys.year
    };
    const newAlbum = this.filterAlbumManager.filter(this.filterationKeys, this.album);
    this.updateItems(newAlbum);
  }

  onFilterByYear(e) {
    this.filterationKeys = {
      artist: this.filterationKeys.artist,
      title: this.filterationKeys.title,
      genres: this.filterationKeys.genres,
      year: e[0]['itemName']
    };
    const newAlbum = this.filterAlbumManager.filter(this.filterationKeys, this.album);
    this.updateItems(newAlbum);
  }

  updateItems(newAlbum) {
    this.items = new Array();
    this.items = newAlbum;
  }
}
