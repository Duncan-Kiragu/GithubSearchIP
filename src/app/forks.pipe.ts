import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forks'
})
export class ForksPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
