import { Pipe, PipeTransform } from '@angular/core';

import { Party } from './party/party.model';

@Pipe({
  name: 'shortBy',
  pure: false
})
export class ShortByPipe implements PipeTransform {

  transform(array: Array<Party>): any {
    if (array) {
      return array.sort((a: Party, b: Party) => +a.timestamp.replace(/-/g, '') - +b.timestamp.replace(/-/g, ''))
    } else {
      return array;
    }
  }

}
