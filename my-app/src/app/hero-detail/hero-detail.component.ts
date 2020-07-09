import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  heroSelected: Hero;
  heroSelectedSubscription: Subscription ;

  constructor(private readonly heroServ: HeroService) { }
  ngOnDestroy(): void {
    if(this.heroSelectedSubscription) {
      this.heroSelectedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.heroSelectedSubscription = this.heroServ.selectedHero.subscribe((hero)=>
    {debugger;
      this.heroSelected = hero;
    } )
    }

}
