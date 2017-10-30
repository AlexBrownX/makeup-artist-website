import { Component,  AfterViewInit , HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import * as photoSwipeLoader from '../photoswipe-loader';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class GalleryPageComponent implements AfterViewInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() {}

  ngAfterViewInit() {
    this.initialisePhotoswipe();
  }

  initialisePhotoswipe() {
    photoSwipeLoader.initPhotoSwipeFromDOM('.my-gallery');
  }
}
