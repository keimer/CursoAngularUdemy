import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-share-heroes',
  templateUrl: './share-heroes.component.html',
  styleUrls: ['./share-heroes.component.css']
})
export class ShareHeroesComponent implements OnInit {

  private heroesEncontrados: Heroe[] = [];
  constructor( private _heroes: HeroesService, 
               private _activatedRoute: ActivatedRoute, 
               private _router: Router
               ) {
      this._activatedRoute.params.subscribe( params => {
      // console.log( params['texto']);
      let tempArr: Heroe[] = [];
      tempArr = this._heroes.getShareHeroes(params['texto']);
      if ( tempArr.length !== 0 ) {
        this.heroesEncontrados = tempArr;
      }else {
        this._router.navigate(['error', 'No fue encontrado ningún héroe que posea el texto indicado "' + params['texto'] + '", intente nuevamente.']);

      }

    });

  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    // console.log('Indice: ' + id);
    this._router.navigate( ['/heroe', id ]);
  }

}
