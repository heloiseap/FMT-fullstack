import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor',
  standalone: true
})
export class ConversorPipe implements PipeTransform {

  transform(value: number): number {  
    return (value/1000);
  }

}
//importar no app.components.ts