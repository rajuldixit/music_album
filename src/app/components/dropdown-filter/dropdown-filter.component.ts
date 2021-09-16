import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit,  OnChanges {

  @Input() config : any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.config.currentValue) {
      this.dropdownList = this.config.data;
      this.dropdownSettings = {
        singleSelection: this.config.multi,
        text:this.config.title,
      }
    }
  }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(){
    this.dropdownSettings = {enableSearchFilter: true};
  }
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }

}
