import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddProductComponent>
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
        this.dialogRef.close();
        /* this.router.navigate(['/products']); */

        /* this.snackBar.openFromComponent(SucsesSnackBarComponent,{
          panelClass: [
            'default-color',
            'text-white'
          ],
          data: 'Product has been added'
        }) */
        this.snackBar.open('Product has been added', null,
        {
          duration: 5000,
          panelClass:  [
            'default-color',
            'text-white'
          ]
        });
      }, () => {
          this.form.reset();
          this.snackBar.open('Product has not been added', null,
            {
              duration: 5000,
              panelClass:  [
                'danger-color',
                'text-white'
              ]
            });
        });
     }
    }

    cancel(): void {
      this.dialogRef.close();
    }

}
