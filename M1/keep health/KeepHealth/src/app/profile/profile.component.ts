import { Component, OnInit } from '@angular/core';
import { AlturaEmMetrosPipe } from '../pipes/altura-em-metros.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AlturaEmMetrosPipe],
  templateUrl: './profile.component.html', //fix @tsconfig.json: "noPropertyAccessFromIndexSignature": false
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  
  // perfilTeste = [{
  //   nome: "Nome",
  //   email: "email@email.com",
  //   peso: "55kg",
  //   altura: "1,6m",
  //   idade: "47",
  //   codigo: "teste123",
  //   senha: "123456",
  // }]
  perfil: any
  ngOnInit(): void {
    this.perfil = JSON.parse(localStorage.getItem("perfil") || "{}")[0]
  }



}
