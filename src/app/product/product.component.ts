import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [];
  displayedColumns = ['productName', 'brand', 'category', 'price'];
  // dataSource = new MatTableDataSource(this.productService);
  // dataSource = this.products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res: any[]) => {
      this.products = res;
      console.log(this.products);
    });
  }
}
