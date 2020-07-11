import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  heroSelected: Hero;
  heroSelectedSubscription: Subscription ;
  id: number;

  constructor(private readonly heroServ: HeroService,
    private readonly activeRoute: ActivatedRoute,
    private readonly location: Location) { }

  ngOnDestroy(): void {
    if(this.heroSelectedSubscription) {
      this.heroSelectedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getId();
    this.getHero();
    }

    getId() {
      this.id = +this.activeRoute.snapshot.paramMap.get('id');
    }

    getHero() {
      this.heroSelectedSubscription = this.heroServ.getSelectedHero(this.id).subscribe(
        (hero) => this.heroSelected = hero
      )
    }

    return() {
      this.location.back();
    }

}
