import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
