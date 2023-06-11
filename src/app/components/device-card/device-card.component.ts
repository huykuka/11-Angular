import { Component } from '@angular/core'
import { HeroService } from 'src/app/services/hero.service'
import { Device } from 'src/app/device'
@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css'],
})
export class DeviceCardComponent {
  constructor(private heroService: HeroService) {}
  devices: Device[] = []
  getDevices(): void {
    this.heroService.getDevices().subscribe((devices) => (this.devices = devices))
  }
  ngOnInit(): void {
    this.getDevices()
  }
}
