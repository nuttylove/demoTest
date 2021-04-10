import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => String(item).toLocaleLowerCase().indexOf(String(filter).toLocaleLowerCase()) !== -1);
  }

}
