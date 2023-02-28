import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../Iproduct';
import { ProductService } from '../product-service/product.service';


@Component({
  // selector: 'app-product.details',
  templateUrl: './product.details.component.html',
  styleUrls: ['./product.details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
 detailsTitle: string = 'Product Details';
product: Iproduct  | undefined;
errorMsg: string = '';
 constructor(private route : ActivatedRoute,
   private router : Router ,
   private productService : ProductService) {
   
 }
 ngOnInit(): void {
 const id = Number(this.route.snapshot.paramMap.get('id'));
 this.detailsTitle += " " + id;
 this.getProductById(id);

}

getProductById(id : number): void {
 this.productService.getProductById(id).subscribe(
  {
  next : product=> this.product=product,
  error : error => this.errorMsg=error,
  complete : () => console.log(this.product)
  
  }
 )

}

OnBack(): void {
  this.router.navigate(['/products']);
}
}