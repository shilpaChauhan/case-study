import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
    private categoryList = new Array<{price: number}>();
    constructor() { }

    getCategoryProducts() {
        for (let i=0; i<40; i++) {
            this.categoryList.push({
            price: this.randomNumber()
            });
        }
        return of(this.categoryList);
    }

    private randomNumber(): number { 
        return Math.floor(Math.random() * (10000 - 100) + 100);
    } 
}