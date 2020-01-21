import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product[] = [];
  form: FormGroup;
  display: boolean;

  constructor(
    private ds: DataSourceService,
    private router: Router
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

        this.display = true;

        setTimeout(() => {
          this.router.navigate(['/store']);
        }, 2000);
      }, () => {
        this.display = false;
        });
     }
    }
}

