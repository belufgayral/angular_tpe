import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Herb } from './herbs-list/Herb';

@Injectable({
  providedIn: 'root'
})
export class HerbCartService {

  _herbList: Herb[] = [];
  herbList: BehaviorSubject<Herb[]> = new BehaviorSubject(this._herbList);

  constructor() { }

  addToCart(herb: Herb) {
    let item: Herb | undefined = this._herbList.find((v1) => v1.name == herb.name);

    if (!item) {
      this._herbList.push({... herb});
    } else {
      item.quantity += herb.quantity;
    }
    
    this.herbList.next(this._herbList);

    console.log(this._herbList);
  }
}
