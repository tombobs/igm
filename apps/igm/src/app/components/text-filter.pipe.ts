import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'igmTextFilter',
  pure: false
})
export class IgmTextFilterPipe implements PipeTransform {
  transform(items: { text: string }[], filterText: string): any {
    if (!items || !filterText) {
      return items;
    }
    return items.filter(item => item.text.includes(filterText));
  }
}
