import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { MessageService } from './message.service'
import { Device } from '../device'
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService, private http: HttpClient) {}
  private devicesUrl = 'http://192.168.1.30:4000/'
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    // this.messageService.add('HeroService: fetched heroes')
    return heroes
  }
  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
  }
  getHero(id: number): Observable<Hero> {
    let hero = HEROES.find((hero) => hero.id === id)!
    this.messageService.add(`heroService: fetched hero id = ${id}`)
    return of(hero)
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }
}
