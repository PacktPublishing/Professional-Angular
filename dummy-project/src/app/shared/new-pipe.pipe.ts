import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipw'
})
export class NewPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
