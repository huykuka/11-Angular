import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here
import { AppComponent } from './app.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { MessageComponent } from './components/message/message.component'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { DeviceCardComponent } from './components/device-card/device-card.component'

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessageComponent, DashboardComponent, DeviceCardComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
