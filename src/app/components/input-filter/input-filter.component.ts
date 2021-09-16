import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit, OnChanges {
  @Input() config: any;
  @Output() searchTerm = new EventEmitter();
  placeholder: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.config.currentValue) {
      this.placeholder = changes.config.currentValue.title;
    }
  }

  ngOnInit(): void {
  }

  onSearchTermUpdate(value) {
    this.searchTerm.emit(value);
  }

}
