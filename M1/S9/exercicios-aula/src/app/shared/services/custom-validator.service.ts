import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }
//forma padrao do validador:
  validadeNomeCompleto(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      //~ logica ~
      const nomes = control.value.split(" ")

      
      return null;
    }
  }
}
