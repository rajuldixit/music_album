import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageMapNameManager {

  artistCoverImages: Array<string> = new Array();
  constructor() {
    this.initImageList();
  }

  initImageList() {
    this.artistCoverImages = [
      "cover1.jpg",
      "cover2.jpg",
      "cover3.jpeg",
      "cover 4.jfif",
      "cover5.jfif",
      "cover6.jfif"
    ]
  }

  imagesMapWithGenreNames(list) {
    let genreCardData = new Array();
    list.forEach(element => {
      if(element !== 'anonymous') {
        let card = {
          name: element,
          imageURL: this.getImageUrl(element)
        }
        genreCardData.push(card);
      }
    });
    return genreCardData;
  };

  getImageUrl(item) {
    let baseUrl = './../../../assets/images/';
    switch(item) {
      case 'Pop':
        baseUrl = baseUrl + 'pop.jpg';
        break;

      case 'Rap/Hip-Hop':
        baseUrl = baseUrl + 'Rap-Hip-Hop.jfif';
        break;

      case 'Rock':
        baseUrl = baseUrl + 'Rock.jpg';
        break;

      case 'Electronic/Dance':
        baseUrl = baseUrl + 'Electronic-Dance.jpg';
        break;

      case 'Alternative/Indie':
        baseUrl = baseUrl + 'Alternative-Indie.jfif';
        break;

      case 'Hard Rock/Metal':
        baseUrl = baseUrl + 'Hard Rock Metal.jfif';
        break;

      case 'Jazz':
        baseUrl = baseUrl + 'Jazz.jpg';
        break;

      case 'Latin':
        baseUrl = baseUrl + 'Latin.png';
        break;

      case 'Country':
        baseUrl = baseUrl + 'Country.jfif';
        break;

      case 'Religious/Spiritual':
        baseUrl = baseUrl + 'Religious Spiritual.jpg';
        break;

      case 'Holiday':
        baseUrl = baseUrl + 'Holiday.jfif';
        break;

      case 'Folk/Americana':
        baseUrl = baseUrl + 'Folk-Americana.jpg';
        break;

      case 'Classical':
        baseUrl = baseUrl + 'Classical.jfif';
        break;

      case 'Regional Popular':
        baseUrl = baseUrl + 'Regional Popular.jfif';
        break;

      case 'Blues':
        baseUrl = baseUrl + 'Blues.jpg';
        break;

      case 'Soundtracks':
        baseUrl = baseUrl + 'Soundtracks.jpg';
        break;

      case 'World/Roots':
        baseUrl = baseUrl + 'roots.jpg';
        break;

      case 'Reggae':
        baseUrl = baseUrl + 'Reggae.jpg';
        break;
    }
    return baseUrl;
  }

  imageMapWithArtists(list) {
    let artistCardData = new Array();
    list.forEach(element => {
      let imageUrl = './../../../assets/images/'+this.artistCoverImages[this.getRandomNumber()];
      let card = {
        name: element,
        imageURL: imageUrl
      }
      artistCardData.push(card);
    });
    return artistCardData;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 5 + 1);
  }
}
