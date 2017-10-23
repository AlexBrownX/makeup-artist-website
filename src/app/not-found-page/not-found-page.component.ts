import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class NotFoundPageComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('@routeAnimation') routeAnimation;

  constructor() { }

  ngOnInit() {
  }
}
