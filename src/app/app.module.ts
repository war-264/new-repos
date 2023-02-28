import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
   
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
   
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome' , pathMatch:'full' },
      {path:'', redirectTo: 'welcome' , pathMatch:'full'}


    ]),
    ProductModule,
    BrowserAnimationsModule,
    MatSnackBarModule
   

   
   
   
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ProductListComponent
   
    ]
})
export class AppModule { }
