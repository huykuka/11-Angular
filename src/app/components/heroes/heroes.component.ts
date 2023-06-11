import { Component } from '@angular/core'
import { Hero } from 'src/app/hero'
import { HEROES } from 'src/app/mock-heroes'
import { HeroService } from 'src/app/services/hero.service'
import { MessageService } from 'src/app/services/message.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Hero[] = []
  selectedHero?: Hero
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }
  ngOnInit(): void {
    this.getHeroes()
  }
}
