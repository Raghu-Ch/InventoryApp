import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  showSpinner = true;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res) => {
      this.showSpinner = false;
      this.products = res;
      console.log(this.products);
    });
  }
}
