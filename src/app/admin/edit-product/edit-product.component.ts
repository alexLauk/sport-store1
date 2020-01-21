import { Component, OnInit } from '@angular/core';
import { Product, DataSourceService } from 'src/app/model/data-source.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product[] = [];
  form: FormGroup;
  display: boolean;
  product1;

  constructor(
    private ds: DataSourceService,
    private router: Router,
    private route: ActivatedRoute
    ) {
        this.route.params.subscribe((p) => {
            const id = +p["id"];

            this.ds.getProductById(id).subscribe((product) => {
                this.product1 = product;
                this.form = new FormGroup ({
                  name: new FormControl(this.product1.name, Validators.required),
                  category: new FormControl(this.product1.category, Validators.required),
                  description: new FormControl(this.product1.description, Validators.required),
                  price: new FormControl(this.product1.price, Validators.required)
                });
            })
        })
    }

  ngOnInit() {

  }


  editProduct() {
    this.display = false;
    if (this.form.valid) {
      const product = new Product(
        this.form.get('name').value,
        this.form.get('category').value,
        this.form.get('description').value,
        this.form.get('price').value
      );
      this.ds.editProduct(product).subscribe(() => {

        this.form.reset();

        this.display = true;

        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 2000);
      }, () => {
        this.display = false;
        });
     }
    }

}
