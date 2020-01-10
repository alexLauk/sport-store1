import { Component, OnInit } from '@angular/core';
import { Product, DataSourceService} from '../../model/data-source.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  productList: Product[] = [];
  categories: Set<string> | string[] = [];


  constructor(private ds: DataSourceService) { }

  ngOnInit() {
    
    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
      const temp = products.map((p) => p.category);
      this.categories = new Set(temp);
   });
  }
}