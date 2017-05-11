import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  genderconvert = {'M': 'Male', 'F': 'Female'}
  transform(value: any, args?: any): any {
      return this.genderconvert[value] || 'Other';
  }

}
