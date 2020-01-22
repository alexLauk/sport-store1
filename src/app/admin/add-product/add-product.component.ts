import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product[] = [];
  form: FormGroup;

  constructor(
    private ds: DataSourceService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.form = new FormGroup ({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  addProduct() {
    if (this.form.valid) {
      const product = new Product(
        this.form.get('name').value,
        this.form.get('category').value,
        this.form.get('description').value,
        this.form.get('price').value
      );
      this.ds.addProduct(product).subscribe(() => {

        this.form.reset();
        this.router.navigate(['/products']);
        this.snackBar.openFromComponent(SnackBarComponent,{
          announcementMessage: 'Product has been added',
          duration: 5000,
          panelClass: [
            'default-color',
            'text-white'
          ],
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        /* this.openSnackBar(
          'Product has been added',
          5000,
          'bottom',
          'center',
          [
            'default-color',
            'text-white'
          ]
        ); */
      }, () => {

        this.form.reset();
        this.openSnackBar(
          'Product has not been added',
          5000,
          'bottom',
          'center',
          [
            'danger-color',
            'text-white'
          ]
        );
        });
     }
    }

    openSnackBar(message, duration, verticalPosition, horizontalPosition, panelClass ) {
      this.snackBar.open(message, '',
        {
          duration,
          verticalPosition,
          horizontalPosition,
          panelClass
        }
      );
    }

}
