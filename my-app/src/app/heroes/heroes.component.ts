import { Component, OnInit, OnDestroy } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit , OnDestroy {

  heroes: Hero[];
  heroesSubscription : Subscription;

  constructor(private readonly heroServ: HeroService) { }
  
  ngOnDestroy(): void {
    if(this.heroesSubscription) {
      this.heroesSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesSubscription = this.heroServ.getHero().subscribe((heroes)=>{
      this.heroes = heroes;
    });
  }

  selectHero(hero:Hero) {debugger;
    this.heroServ.selectHero(hero);
  }
}
