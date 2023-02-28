
import { Component,EventEmitter,Input,OnChanges, Output} from'@angular/core';
@Component({
    selector : 'app-StarComponent',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']

})
export class StarComponent implements OnChanges   {
  
    title: string='stars';
    cropWidth: number=75;
    @Input()  rating: number=0;
 @Output() ratingClicked :EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
       this.cropWidth=  this.rating * this.cropWidth/5;
       console.log(this.cropWidth);
    }

    onClicks(): void {
        this.ratingClicked.emit(` ratings click event ${this.rating} and ${this.cropWidth}`);
    }

}