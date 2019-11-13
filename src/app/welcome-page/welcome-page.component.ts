import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class WelcomePageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor(private router: Router) { }

  ngOnInit() {}

  public navigateToGallery(): void {
    this. sendLinkClickEvent('gallery-page');
    this.router.navigate(['/gallery']);
  }

  public navigateToContact(): void {
    this.sendLinkClickEvent('contact-page');
    this.router.navigate(['/contact']);
  }

  public navigateToMagazineWork(): void {
    this.sendLinkClickEvent('magazine-work-page');
    this.router.navigate(['/magazinework']);
  }


  public sendLinkClickEvent(eventName: string): void {
    if ('ga' in window) {
      const tracker = (<any>window).ga.getAll()[0];
      if (tracker) {
        tracker.send('event', 'userInteraction', 'linkClick', eventName);
      }
    }
  }
}
