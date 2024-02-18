import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../../../core/models/product";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @Output() notif = new EventEmitter();
  products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  sendDataToParent(p:string) {
    this.notif.emit(p);
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

}
