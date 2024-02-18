import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../core/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../core/models/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() p!: any;
  productId:any

  editProductForm: FormGroup
  constructor(private productService: ProductService, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.editProductForm = this.formBuilder.group({
        name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        description: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        price: new FormControl(null, [Validators.required, Validators.email]),
        quantity: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      },
    );
  }

  ngOnInit(): void {
    console.log("sdqsfd", this.p)
    this.productId = this.route.snapshot.params['id'];
  }
  get f() {
    return this.editProductForm.controls
  }
  get name(){
    return this.editProductForm.get('name')?.value;
  }

  get description() {
    return this.editProductForm.get('description')?.value;
  }

  get price(){
    return this.editProductForm.get('price')?.value;
  }

  get quantity(){
    return this.editProductForm.get('quantity')?.value;
  }

  editProduct() {
    let product: Product = {
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    };
    this.productService.updateProduct(this.productId, product).subscribe(
      (response) => {
        this.editProductForm.reset()
        console.log('product updated:', response);
        this.router.navigate(['/home'])
      },
      (error) => {
        console.error('edit product failed:', error);
      }
    );
  }
}
