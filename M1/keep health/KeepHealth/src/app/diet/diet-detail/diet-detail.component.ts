import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import alimentosLista from '../../../assets/alimentos.json'

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css',
})
export class DietDetailComponent {
  alimentos: any = alimentosLista 
  //pegar parametro da rota:
  paramValue: string = ''
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.paramValue = params['id']
    });
    this.alimentos.filter((alimento: { name: string; }) => alimento.name == this.paramValue)
    
  }

}
