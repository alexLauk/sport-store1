import { Component, OnInit, Inject } from '@angular/core';
import { Product, DataSourceService } from 'src/app/model/data-source.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product[] = [];
  form: FormGroup;
  display: boolean;
  productEdit: Product;



  constructor(
    private ds: DataSourceService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number
    ) {
       /*  this.route.params.subscribe((p) => {
            const id = +p["id"]; */

            this.ds.getProductById(+id).subscribe((product) => {
                this.productEdit = product;
                this.form = new FormGroup ({
                  name: new FormControl(this.productEdit.name, Validators.required),
                  category: new FormControl(this.productEdit.category, Validators.required),
                  description: new FormControl(this.productEdit.description, Validators.required),
                  price: new FormControl(this.productEdit.price, Validators.required)
                });
            })
        // })
    }

  ngOnInit() {
  }

  editProduct() {

    if (this.form.valid) {
      const product = new Product(
        this.form.get('name').value,
        this.form.get('category').value,
        this.form.get('description').value,
        this.form.get('price').value
      );
      this.ds.editProduct(product).subscribe(() => {

        this.form.reset();
        this.dialogRef.close();

        /* setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 2000); */

        this.snackBar.open('Product has been edited', null,
        {
          duration: 5000,
          panelClass:  [
            'default-color',
            'text-white'
          ]
        });


      }, () => {
          this.form.reset();
          this.snackBar.open('Product has not been edited', null,
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

}
