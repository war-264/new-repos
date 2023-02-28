import { Iproduct } from "../Iproduct";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
}
)
export class ProductService
{

    private productUrl ='/assets/product.json';

    constructor(private http : HttpClient){

    }
    getProducts(): Observable<Iproduct[]>{
        return  this.http.get<Iproduct[]>(this.productUrl).pipe(
            tap(data=>console.log('all:'+ JSON.stringify(data))),
            catchError(this.HandleError)
        );
      
    }
    getProductById(id: number): Observable<Iproduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: Iproduct []) => products.find(p => p.pid === id))
          );
      }
    private HandleError(error : HttpErrorResponse)
    {

        let errorMessage = '';
        if (error. error instanceof ErrorEvent)
        {
            errorMessage = 'error occured: ' + error. error.message ;
        }else{
            errorMessage = 'server site error' + error.status + ' error message ' + error.message ; 
        }

        console.error(errorMessage);
         return throwError(()=> errorMessage)
    }
}