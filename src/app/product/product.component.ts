import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  getProductById(id: string): void {
    this.productService.getProduct(id).subscribe(res => console.log(res));
  }

}
