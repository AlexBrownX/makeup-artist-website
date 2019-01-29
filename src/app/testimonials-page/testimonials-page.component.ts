import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class TestimonialsPageComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor() { }

  ngOnInit() {}

  public sendLinkClickEvent(eventName: string): void {
    if ('ga' in window) {
      const tracker = (<any>window).ga.getAll()[0];
      if (tracker) {
        tracker.send('event', 'userInteraction', 'linkClick', eventName);
      }
    }
  }
}
