import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, Subject } from 'rxjs';
import {MessagesService } from './messages.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private readonly messageServ: MessagesService) { }

  getHero(): Observable<Hero[]> {
    this.messageServ.addMessage("Heroes has been Fetched");
    return of(HEROES);
  }

  getSelectedHero(id: number): Observable<Hero> {
    this.messageServ.addMessage(`Hero is selected with id= ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
