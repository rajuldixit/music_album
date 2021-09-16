import { DataManager } from './../../manager/data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Items } from './album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  items: Items[];
  showIllustration: boolean;
  loadingState: string;
  filterByGenres: {};
  filterByYear: {};
  filterByArtist: {};
  filterByTitle: {};

  constructor(private dataManager: DataManager) {
    this.loadingState = 'default';
    this.showIllustration = false;
    this.items =  new Array<Items>();
  }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    this.dataManager.retrieveData().then(response => {
      if(response) {
        this.filterByGenres = {
          multi: true,
          title: 'Select Genre',
          data: this.getGenres(response['genres'])
        };
        this.filterByYear = {
          multi: false,
          title: 'Select Year',
          data: this.getYears(response['videos'])
        };
        this.filterByTitle = {
          title: 'Search Title',
          data: this.getTitleList(response['videos'])
        };
        this.filterByArtist = {
          title: 'Search Artist',
          data: this.getArtistList(response['videos'])
        };
        if(Object.keys(response['videos']).length > 0) {
          this.items = Object.values(response['videos']);
        }
      }
    });
  }

  getArtistList(list) {
    let releasingYear = new Array();
    let uniqueArtist = [...new Set(list.map(item => item.artist))];
    uniqueArtist = uniqueArtist.sort();
    uniqueArtist.forEach(element => {
      let i = 1;
      let year = {
        id: i++,
        itemName: element
      }
      releasingYear.push(year);
    });
    return releasingYear;
  }

  getTitleList(list) {
    let releasingYear = new Array();
    let uniqueTitle = [...new Set(list.map(item => item.title))];
    uniqueTitle = uniqueTitle.sort();
    uniqueTitle.forEach(element => {
      let i = 1;
      let year = {
        id: i++,
        itemName: element
      }
      releasingYear.push(year);
    });
    return releasingYear;
  }

  getYears(list) {
    let releasingYear = new Array();
    let uniqueYears = [...new Set(list.map(item => item.releaseYear))];
    uniqueYears = uniqueYears.sort();
    uniqueYears.forEach(element => {
      let i = 1;
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
    list.forEach(element => {
      let i = 1;
      let genreName = {
        id: i++,
        itemName: element.name
      }
      genresList.push(genreName);
    });
    return genresList;
  }

  onFilterByArtist(e) {
    console.log('artist :',e);
  }

  onFilterByTitle(e) {
    console.log('title :',e);
  }
}
