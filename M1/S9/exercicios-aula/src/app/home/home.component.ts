import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, CommonModule, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  listaProdutos = [
    {
      imagem: "assets/produto.jpg",
      descricao: "produto A"
    },
    {
      imagem: "assets/produto.jpg",
      descricao: "produto B"
    }    
  ]

  textoPesquisa: string | undefined;
  resultadoPesquisa = this.listaProdutos; //pega o modelo do produto

  pesquisar(){
    this.resultadoPesquisa = this.listaProdutos.filter(produto => produto.descricao === this.textoPesquisa)
  }

}

