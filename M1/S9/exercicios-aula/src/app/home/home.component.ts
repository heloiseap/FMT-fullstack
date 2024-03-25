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
  // pq os produtos tao na home em vez do card?
  listaProdutos = [
    {
      imagem: "https://placehold.jp/150x150.png",
      descricao: "produto A",
      valor: 150
    },
    {
      imagem: "https://placehold.jp/150x150.png",
      descricao: "produto B",
      valor: 150
    }    
  ]

  textoPesquisa: string | undefined;
  resultadoPesquisa = this.listaProdutos; //pega o modelo do produto

  pesquisar(){
    this.resultadoPesquisa = this.listaProdutos.filter(produto => produto.descricao === this.textoPesquisa)
  }

}

