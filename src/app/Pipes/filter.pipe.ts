import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {

    if (typeof value === 'undefined' || null) {
      return value;
    }
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (
        item['firstName'].toLowerCase().includes(filterString.toLowerCase()) ||
        item['lastName'].toLowerCase().includes(filterString.toLowerCase()) ||
        item['email'].toLowerCase().includes(filterString.toLowerCase()) ||
        item['city'].toLowerCase().includes(filterString.toLowerCase()) ||
        item['state'].toLowerCase().includes(filterString.toLowerCase())
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
