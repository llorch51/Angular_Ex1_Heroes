import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

//variable uso en ngOnInit
  heroes:Heroe[]=[];

  // importar servicio
  constructor(private _heroesService:HeroesService,
              private _router:Router) { 
    // console.log("constructor");
  }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();//función en heroes.service.ts
    console.log(this.heroes);//muestra el array de objetos
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
    console.log(idx);//muestra el index del objeto
  }

}
