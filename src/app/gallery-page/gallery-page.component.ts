import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

// import { JsonpModule, Jsonp, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

import { ScriptService } from '../script-loader.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  providers: [ScriptService],
  animations: [slideInDownAnimation]
})
export class GalleryPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor() {
  }

  ngOnInit() {
  }
}
