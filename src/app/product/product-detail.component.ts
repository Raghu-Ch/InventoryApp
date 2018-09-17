import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // const id$ = this.route.params.subscribe(params => console.log(params['id']));
    // console.log(id$);
    this.productService.getProduct(id).subscribe((res) => {
      this.product = res;
      console.log(this.product);
    });
  }
}
