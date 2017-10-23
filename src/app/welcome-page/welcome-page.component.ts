import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class WelcomePageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = globalVars.animationsEnabled;
  @HostBinding('style.display')   display = 'block';

  constructor() {}

  ngOnInit() {
  }

}
