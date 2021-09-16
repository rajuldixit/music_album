import { Injectable } from '@angular/core';
import { Videos } from '../data-manager/data.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterAlbumManager {
  newAlbum: Videos[];
  constructor() { }

  filter(keys, list) {
    this.newAlbum = Array<Videos>();
    let filterBy = this.formFilterByObject(keys);
    let newList = this.filterByKeys(list, filterBy);
    if(keys.genres.length > 0) {
      let items = new Array();
      if(newList.length > 0) {
        items = newList;
      } else {
        items = list;
      }
      this.newAlbum = this.filterByGenres(keys.genres, items);
    } else {
      this.newAlbum = newList;
    }
    return this.newAlbum;
  }

  filterByKeys(list, keys) {
    let newList = list.filter(function(item) {
      let count = 0;
      for (var key in keys) {
        if(item[key] !== undefined) {
          if((key === 'artist' && (item[key] && item[key].toString().toLowerCase().split(" ")[0] === keys[key].toLowerCase()))) {
             ++count;
          }
          if((key === 'title' && (item[key] && item[key].toString().toLowerCase().split(" ")[0] === keys[key].toLowerCase()))) {
            ++count;
          }
          if(key === 'releaseYear' && item[key] === keys[key]) {
            ++count;
          }
        }
      }
      if(count === Object.keys(keys).length) {
        return true;
      } else {
        return false;
      }
    });
    return newList;
  }

  formFilterByObject(keys) {
    let filterBy = {};
    if(keys.artist !== '') {
      filterBy['artist'] = keys.artist;
    }
    if(keys.title !== '') {
      filterBy['title'] = keys.title;
    }
    if(keys.year > 0) {
      filterBy['releaseYear'] = keys.year;
    }
    return filterBy;
  }

  filterByGenres(genres, list) {
    let records = new Array();
    let allItems = new Array();
    genres.forEach(element => {
      records.push(list.filter(item => item.genreName === element.itemName));
    });
    records.forEach(el => {
      el.forEach(item => {
        allItems.push(item);
      });
    });
    return allItems;
  }
}
