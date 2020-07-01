import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroeService: HeroesService,
               private route: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);

    });
  }

  verHeroe(idx: number){
    this.route.navigate( ['/heroe', idx] );
  }
}
