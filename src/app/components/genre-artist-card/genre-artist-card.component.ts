import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre-artist-card',
  templateUrl: './genre-artist-card.component.html',
  styleUrls: ['./genre-artist-card.component.scss']
})
export class GenreArtistCardComponent implements OnInit {

  @Input() items: any;
  @Output() selectedItem = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(e) {
    let key = this.items[this.items.length-1];
    this.selectedItem.emit({key: key, value: e});
  }

}
