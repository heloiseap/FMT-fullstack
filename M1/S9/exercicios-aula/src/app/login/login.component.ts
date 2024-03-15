import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  
  login = {
    nomeUsuario: '',
    senhaUsuario: ''
  }

  constructor(private router: Router) {}

  entrar(){
    if (this.login.nomeUsuario && this.login.senhaUsuario) {
      this.router.navigate(['/home']);
    }
  }

  limparForm() {
    console.log()
  }
}
