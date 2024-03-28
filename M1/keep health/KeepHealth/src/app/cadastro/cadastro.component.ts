import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  cadastro = {
    nome: '',
    email: '',
    dataNascimento: '',
    senha: '',
    confirmaSenha: '',
  };

  constructor(private router: Router) {}

  listaUsers = [
    {
      email: 'teste',
      senha: 'teste',
    },
  ];

  cadastrar() {
    if (
      this.cadastro.nome &&
      this.cadastro.email &&
      this.cadastro.nome &&
      this.cadastro.dataNascimento &&
      this.cadastro.senha &&
      this.cadastro.confirmaSenha
    ) {
      if (this.cadastro.senha === this.cadastro.confirmaSenha) {
        let novoUsuario = {
          email: this.cadastro.email,
          senha: this.cadastro.senha,
        };
        this.listaUsers.push(novoUsuario);
        localStorage.setItem('listaUsers', JSON.stringify(this.listaUsers));
        alert('Usuário cadastrado');
      } else {
        alert('Senhas não correspondem');
      }
    }
  }

  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
