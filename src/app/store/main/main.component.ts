import { Component, OnInit } from '@angular/core';
import { Product, DataSourceService } from 'src/app/model/data-source.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productList: Product[] = [];
  categories: Set < string > | string[] = [];
  currentCategory: null;

  constructor(
    private ds: DataSourceService,
    private router: Router,
    public cartService: CartService
    ) {}

  ngOnInit() {

    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
      const temp = products.map((p) => p.category);
      this.categories = new Set(temp);
    });
  }

  getCategory(category: any) {
    this.currentCategory = category;
  }

  getProduct(): Product[] {
    if (this.currentCategory == null) {
      return this.productList;
    } else {
      return this.productList.filter((product) => product.category === this.currentCategory);
    }
  }
  addToCart(product: Product) {
    this.cartService.addProductLine(product);
    this.router.navigate(['/cart']);
  }
}
