import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test1'
})
export class Test1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    return value + '123';
  }

}
