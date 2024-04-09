import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alturaEmMetros',
  standalone: true
})
export class AlturaEmMetrosPipe implements PipeTransform {

  transform(value: number): number {  
    return (value/100);
  }
}
