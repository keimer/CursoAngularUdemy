import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {

  private heroe: Heroe = { id: -1, nombre: '', casa: '', aparicion: '', bio: '', img: ''};
  constructor() { }

  ngOnInit() {
  }

}
