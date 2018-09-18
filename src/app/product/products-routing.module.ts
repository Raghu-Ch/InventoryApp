import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';

const productsRoutes: Routes = [
    { path: 'product', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }
