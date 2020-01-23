import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private ds: DataSourceService,
    private router: Router,
    public dialog: MatDialog
    ) { }
  productList: Product[] = [];

  ngOnInit() {
    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
     });
  }

  del(id: number) {
    this.ds.deleteProduct(id).subscribe(() => {
      this.ds.getProduct().subscribe((products: Product[]) => {
        this.productList = products;
       });
     });
  }

 /*  edit(id) {
    this.router.navigate(['/edit', id]);
  } */

  openDialogAddProduct(): void {
    const addProductDialogRef = this.dialog.open(AddProductComponent, {
      minWidth: '30rem',
      minHeight: '30rem',
      width: 'auto',
      height: 'auto'
    });

    addProductDialogRef.afterClosed().subscribe(() => {
      this.ds.getProduct().subscribe((products: Product[]) => {
        this.productList = products;
       });
    });

  }



  openDialogEditProduct(id): void {
    const editProductDialogRef = this.dialog.open(EditProductComponent, {
      width: '550px',
      height: '600px',
      data: id
    });

    editProductDialogRef.afterClosed().subscribe(() => {
      this.ds.getProduct().subscribe((products: Product[]) => {
        this.productList = products;
       });
    });
  }
}
