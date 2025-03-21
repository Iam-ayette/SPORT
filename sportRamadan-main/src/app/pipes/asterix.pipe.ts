import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  // ch='ali'=> '*l*'
  // ch='hello'=> 'h*ll*'
  transform(ch: string): string {
    let result: string = "";
    let voyelles = ["a", "e", "i", "o", "u", "y"]
    for (let i = 0; i < ch.length; i++) {
      let inter = ch[i];
      for (let j = 0; j < voyelles.length; j++) {
        if (ch[i] == voyelles[j]){
          inter = "*"
        break;
      }
    }
      result += inter;
    }
    return result;
  }
    
  

}

