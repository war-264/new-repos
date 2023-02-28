import { Component,OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from '../Iproduct';
import { ProductService } from '../product-service/product.service';
import { Product } from '../product.component';
import {MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';


@Component({
  // selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit   {
  horizontal:MatSnackBarHorizontalPosition ='center';
 vertical : MatSnackBarVerticalPosition ='top';
pagetitle : string= "Product List";

imageWidth : number=100;
imageMargin : number=2;
availableColour='';
showimage : boolean=false;


errorMessage : string='';
sub! : Subscription;

// set get
 private _Lfilter : string="";
 get listFilter(){
  return this._Lfilter;
 }
 set listFilter(value : string){
  this._Lfilter = value;
  
  console.log(this._Lfilter);
  this.filterProducts=this.performFilter(value);
 }

filterProducts:Iproduct[] = [];
products:Iproduct[] = [];


//constructor

 constructor(private productService:ProductService,
  private _snackBar : MatSnackBar)  
 {}
 

 ngOnInit(): void {
 this.sub=this.productService.getProducts().subscribe(
  {
  next : products => this.products=products,
  error : error => this.errorMessage = error,
 
  complete : () => this.filterProducts=this.products
 
}
  
  );
 }
//  ngOnDestroy(): void {
//   this.sub.unsubscribe();
//   console.log('ngOnDestroy ' + JSON.stringify(this.filterProducts) + ' ' + JSON.stringify(this.sub));
// }


// methods
 
// image view
  imageToggle(): void {
    this.showimage =!this.showimage;
    console.log(this.showimage);
   
    
  }

// filter functions
performFilter(filterBy: string): Iproduct []{
filterBy = filterBy.toLocaleLowerCase();

return this.products.filter((product :Iproduct) => 
JSON.stringify(product).toLowerCase().includes(filterBy));
}

// rating view function
onRatingClicked(message : string ): void {
  this._snackBar.open(message,'ok' ,{
    horizontalPosition: this.horizontal,
    verticalPosition: this.vertical,
    duration:3000
  });
}  



}
