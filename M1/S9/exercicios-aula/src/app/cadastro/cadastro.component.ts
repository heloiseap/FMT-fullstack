import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidatorService } from '../shared/services/custom-validator.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule], //para usar form reativo
  providers: [CustomValidatorService], //dependencias sempre serao providers ? ou sei la oq
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('',[Validators.minLength(3), Validators.required, this.customValidatorService.validadeNomeCompleto()]),
    codigo: new FormControl('',[Validators.minLength(3),Validators.maxLength(10), Validators.required]),
    senha: new FormControl('',[Validators.minLength(4),Validators.required]),
    confirmar: new FormControl('',[Validators.minLength(4),Validators.required],)
  })

  constructor(private customValidatorService: CustomValidatorService) {}

  cadastrar(){
    if (this.form.value.senha === this.form.value.confirmar) {
      const usuario = {
        codigoUsuario: this.form.value.codigo,
        senha: this.form.value.senha
      }
      window.localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
    }
  }
}
