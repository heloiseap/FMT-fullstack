import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], //para usar o form template driven
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  
  login = {
    codigoUsuario: '',
    senhaUsuario: ''
  }

  constructor(private router: Router) {}

  entrar(){
    if (this.login.codigoUsuario && this.login.senhaUsuario) {
      this.router.navigate(['/home']); //tem que estar adicionado no app.routes
    }
  }

  limparForm() {
    this.login.codigoUsuario = '',
    this.login.senhaUsuario = ''
  }
}
//reativo:
//export class LoginComponent implements OnInit{
//loginForm!:FormGroup;
//ngOnInit(){
//  this.criarForm()
//}
//criarForm() {
//  this.loginForm = new FormGroup({
//    nome: new FormControl(''),
//    senha: new FormControl(''),
//  })
//}  
//}

