import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html'
})
export class ProductsHeaderComponent {

  sort = 'desc';
  @Output() columnsCountChange = new EventEmitter<number>();

  itemsShowCount = 12;

  constructor() { }


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number):void { 
    this.columnsCountChange.emit(colsNum);
  }
}
