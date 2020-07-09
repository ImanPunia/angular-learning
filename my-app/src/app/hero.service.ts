import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, Subject } from 'rxjs';
import {MessagesService } from './messages.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  selectedHero = new Subject<Hero>();

  constructor(private readonly messageServ: MessagesService) { }

  getHero(): Observable<Hero[]> {
    this.messageServ.addMessage("Heroes has been Fetched");
    return of(HEROES);
  }

  selectHero(hero: Hero) {
    this.messageServ.addMessage(`Hero is selected with id= ${hero.id}`);
    this.selectedHero.next(hero);
  }
}
