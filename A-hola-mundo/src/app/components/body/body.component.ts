import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  card: boolean;
  corazon: boolean;
  familiares: boolean;

  frase: any = {
    autor: 'Keimer Zamora',
    mensaje: 'Eres mi media naranja, mi motor y gasolina que me impulsa a luchar dia a dia, TE AMO BEBE.'
  };

  // Familiares
  padres: string[] = ['Mirna Zamora Cisneros', 'Enrrique Zamora Cisneros', 'Tulio Salazar Torres', 'Rosa Salazar Torres'];
  hijos: string[] = ['Daniel Zamora Salazar', 'Sebastian Zamora Salazar'];

  constructor() { 
    this.card = true;
    this.corazon = false;
    this.familiares = true;
    // this.familiarPadres = true;
  }

  ngOnInit() {
  }

}
