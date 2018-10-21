import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
import { HeroesService, Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  // Inicializo el objeto para evitar errores al intentar leer una propiedad
  private heroeSeleccionado: Heroe = {
    nombre : '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  private heroeId: number;
  private error = true;
  constructor(
                private _activatedRoute: ActivatedRoute ,
                private _route: Router ,
                private _heroeService: HeroesService
              ) {
    this._activatedRoute.params.subscribe( params => {
      // console.log(params);
      // this.heroeId = params.id;  // esta opción tmabien funciona.
      this.heroeId = params['id'];  // Opción recomendada a usa, el nombre de la propiedad o parametro debe ser identico al que fue colocado en el archivo app.routes.ts para dicha ruta.
    });

    // const id: Observable<string> = route.params.map(p => p.id);
    // const url: Observable<string> = route.url.map(segments => segments.join(''));
    // // route.data includes both `data` and `resolve`
    // const user = route.data.map(d => d.user);
  }

  ngOnInit() {
    const temp = this._heroeService.getHeroe(this.heroeId);
    if ( temp === undefined ) {
      // console.log('Desde ngOnInit');
      this.error = false;
      this._route.navigate(['error', 'El heroe no existe en nuestra base de datos, por favor intentar consultar otro heroe.']);
    }else {
      this.heroeSeleccionado = temp;

    }
  }

  tipoCasa() {
    return this._heroeService.getImagenTipoCasa(this.heroeSeleccionado.casa );
  }

}
