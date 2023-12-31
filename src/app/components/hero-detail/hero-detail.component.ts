import { Component, Input } from '@angular/core'
import { Hero } from '../../hero'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from 'src/app/services/hero.service'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}
  hero: Hero = { id: 0, name: '' }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
  }
  ngOnInit(): void {
    this.getHero()
  }
  goBack(): void {
    this.location.back()
  }
}
