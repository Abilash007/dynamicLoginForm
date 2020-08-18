import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataServiceService {

  constructor() { }

  itemDetails = [
    { id: 1234, item: 'item_1' },
    { id: 1235, item: 'item_2' },
    { id: 1236, item: 'item_3' },
    { id: 1237, item: 'item_4' },
    { id: 1238, item: 'item_5' }
  ];

  getItemDetails() {
    return this.itemDetails;
  }
}
