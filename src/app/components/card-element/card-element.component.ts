import { Card } from './card-element.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit {

  @Input() item: Card;
  card: Card;
  favorite: boolean = false;
  @Output() selectedCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.item) {
      this.card = this.item;
    }
  }

  onSelectCard(item) {
    this.selectedCard.emit(item);
  }

  onFill(e) {
    e.preventDefault();
    this.favorite = !this.favorite;
  }
}
