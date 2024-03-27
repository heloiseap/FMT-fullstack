import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule], //para usar form reativo
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    codigo: new FormControl(''),
    senha: new FormControl(''),
    confirmar: new FormControl('')
  })

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
