import { Card } from './card-element.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit {

  @Input() item: Card;
  card: Card;
  constructor() { }

  ngOnInit(): void {
    if(this.item) {
      this.card = this.item;
    }
  }

}
