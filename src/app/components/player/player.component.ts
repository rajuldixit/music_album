import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() selectedAlbum: any;
  @Output() goBack = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onGoBack() {
    this.goBack.emit(true);
  }
}
