import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product.details.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ContentModule } from '../content/content.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentModule,
    RouterModule.forChild([
      { path: 'products', 
      component: ProductListComponent },
      {path: 'products/:id',
      canActivate : [ProductDetailGuard],
      component: ProductDetailsComponent},
    ]),
    

  


  ]
})
export class ProductModule { }
