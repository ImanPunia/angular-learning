import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];
  heroesSubscription: Subscription;

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
      this.heroes = heroes.slice(1,5);
    });
  }
}
