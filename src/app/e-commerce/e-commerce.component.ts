import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  priceList = ['Below 500', '500-1000', '1001-2000', '2001-5000', 'Above 5000'];
  categoryList = new Array<{price: number}>();
  completeList = new Array<{price: number}>();
  gridView = true;
  initialPrice = '';
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getCategoryProducts().subscribe(items => {
      this.completeList  = items;
      this.categoryList = [...this.completeList];
    });
  }

  filterByPrice(event: any) {
    if(event.value.includes('-')) {
      let price = event.value.split('-');
      this.categoryList = this.completeList.filter(item => item.price >= price[0] && item.price <= price[1]).sort((a, b)=>{ return a.price - b.price});
    } else {
      let price = +event.value.split(' ')[1];
      if (price == 500) {
        this.categoryList = this.completeList.filter(item => item.price < price).sort((a, b)=>{ return a.price - b.price});
      } else {
        this.categoryList = this.completeList .filter(item => item.price > price).sort((a, b)=>{ return a.price - b.price});
      }
    }
  }

  reloadData() {
    this.categoryList = [...this.completeList];
    this.initialPrice = '';
    this.gridView = true;
  }
}
