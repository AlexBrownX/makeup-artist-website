import { Component, OnInit } from '@angular/core';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailAddress = globalVars.contact.emailAddress;
  facebook = globalVars.contact.facebook;
  twitter = globalVars.contact.twitter;
  instagram = globalVars.contact.instagram;

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
