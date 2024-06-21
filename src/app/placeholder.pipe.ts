import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
  // standalone: true
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, minLength: number = 0): string {
    return value.length >= minLength ? value : 'Input is too short!';
  }
}


