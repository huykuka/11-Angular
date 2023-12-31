import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './components/heroes/heroes.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { DeviceCardComponent } from './components/device-card/device-card.component'
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DeviceCardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
