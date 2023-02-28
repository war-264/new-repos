
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'CodePipe'

})
export class CodePipe implements PipeTransform  {
 pattern: string |  RegExp='[0-9]*' ;

    transform(value: string, character : string) : string {
     
       var valueArray = value.split(',');
       let i=0;
  
       return valueArray.toString().replace('', character);   
}
   

}