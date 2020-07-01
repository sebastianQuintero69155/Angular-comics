import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private actiivatedRoute: ActivatedRoute, private _heroeService: HeroesService ) {
    this.actiivatedRoute.params.subscribe( params => {
      this.heroe = _heroeService.getHeroe(params['id']);
    });
  }

}
