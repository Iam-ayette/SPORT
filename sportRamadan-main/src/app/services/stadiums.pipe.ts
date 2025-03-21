import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stadiums'
})
export class StadiumsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
