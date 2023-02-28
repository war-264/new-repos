import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { CodePipe } from './customPipeForCode';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    CodePipe
  ],
  imports: [
    CommonModule,
   

  ],
  exports:[
 StarComponent,
 CodePipe,
 CommonModule,
 FormsModule
  ]
})
export class ContentModule { }
