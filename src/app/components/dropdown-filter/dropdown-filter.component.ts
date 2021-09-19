import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit,  OnChanges {

  @Input() config : any;
  @Output() selectedItem = new EventEmitter();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.config.currentValue) {
      this.dropdownList = this.config.data;
      this.dropdownSettings = {
        singleSelection: this.config.singleSelection,
        text:this.config.placeholder,
      }
    }
  }

  ngOnInit(){
    this.dropdownSettings = {enableSearchFilter: true, classes:"custom-dropdown-style"};
  }

  onItemSelect(item:any){
    this.selectedItem.emit(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    this.selectedItem.emit(this.selectedItems);
  }
  onSelectAll(items: any){
    this.selectedItem.emit(this.selectedItems);
  }
  onDeSelectAll(items: any){
    this.selectedItem.emit(this.selectedItems);
  }

}
