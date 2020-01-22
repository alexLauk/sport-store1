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
  display: boolean;
  durationInSeconds = 5;

  constructor(
    private ds: DataSourceService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.display = false;
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

        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: this.durationInSeconds * 1000,
        });

        /* this.display = true;

        setTimeout(() => {
          this.router.navigate(['/store']);
        }, 2000);
      }, () => { */
        this.display = false;
        });
     }
    }
}
