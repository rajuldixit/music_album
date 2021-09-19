import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-artist-card',
  templateUrl: './genre-artist-card.component.html',
  styleUrls: ['./genre-artist-card.component.scss']
})
export class GenreArtistCardComponent implements OnInit {

  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
