import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  // fora do modulo shared:
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() produto: { 
    imagem: string; 
    descricao: string; 
    valor: number } | undefined; //produto pode ser vazio tbm
}
