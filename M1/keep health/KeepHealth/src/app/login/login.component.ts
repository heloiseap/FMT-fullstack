import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login = {
    emailUser: '',
    senhaUser: '',
  };

  constructor(private router: Router) {} //p usar redirecionamento

  // TODO: importar local storage

  listaUsers = [
    {
      email: 'admin@email.com',
      senha: '1234',
    }
  ]; //importar from local storage

  entrar() {
    localStorage.setItem('listaUsers', JSON.stringify(this.listaUsers));
    let usuario = this.listaUsers.filter(
      (user) => user.email === this.login.emailUser
    );
    if (
      this.login.emailUser &&
      this.login.senhaUser &&
      usuario[0].senha === this.login.senhaUser
    ) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha invalidos');
    }
  }
  esqueciSenha() {
    let usu = this.listaUsers.filter(
      (user) => user.email === this.login.emailUser
    );
    console.log(usu);
    usu[0].senha = 'a1b2c4d4';

    alert('Utilize a senha "a1b2c4d4"');
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
