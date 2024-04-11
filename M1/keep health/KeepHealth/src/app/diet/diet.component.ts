import { Component } from '@angular/core';
import alimentos from "../../assets/alimentos.json"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  listaAlimentos: any = alimentos
  ngOnInit(): void {
    console.log(this.listaAlimentos.map((alimento: { name: any; }) => alimento.name))

  }
}
