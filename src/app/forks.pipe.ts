import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forks'
})
export class ForksPipe implements PipeTransform {

  transform(value: number, args?: any){
    if(value < 5){
      return value + "Forks may mean that the User is a junior developer or it's a new github account"
    }
    else{
      return value + "Forks may mean that the  User is an experienced developer"
    }
  }

}
