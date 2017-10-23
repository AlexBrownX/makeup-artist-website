import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class AboutMePageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = globalVars.animationsEnabled;
  @HostBinding('style.display')   display = 'block';

  constructor( ) {}

  ngOnInit() {
  }
}
