import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() items: any;
  @Output() selectedCard = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectCard(item) {
    this.selectedCard.emit(item);
  }

}
