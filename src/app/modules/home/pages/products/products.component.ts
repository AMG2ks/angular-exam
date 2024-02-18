import { Component } from '@angular/core';
import { ProductService } from "../../../../core/services/product.service";
import { Router } from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";
import {User} from "../../../../core/models/user";
import {Product} from "../../../../core/models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  addProductForm: FormGroup
  constructor(private productService: ProductService, private router: Router,
              private formBuilder: FormBuilder) {
    this.addProductForm = this.formBuilder.group({
        name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        description: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
        price: new FormControl(null, [Validators.required, Validators.email]),
        quantity: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      },
    );
  }
  get f() {
    return this.addProductForm.controls
  }
  get name(){
    return this.addProductForm.get('name')?.value;
  }

  get description() {
    return this.addProductForm.get('description')?.value;
  }

  get price(){
    return this.addProductForm.get('price')?.value;
  }

  get quantity(){
    return this.addProductForm.get('quantity')?.value;
  }

  addProduct() {
    let product: Product = {
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    };
    this.productService.addProduct(product).subscribe(
      (response) => {
        this.addProductForm.reset()
        console.log('product added:', response);
        this.router.navigate(['/home'])
      },
      (error) => {
        console.error('add product failed:', error);
      }
    );
  }
}
