import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(texto: string) {
    // console.log("navbar.buscarHeroe()" + texto);
    if (texto.length >= 1) {
      // bucarTexto.value = '';
      this._router.navigate( ['/shareHeroes', texto ]);
    }

  }

}
