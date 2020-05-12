import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      // console.log(params['termino']);//termino----en routes
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

}
