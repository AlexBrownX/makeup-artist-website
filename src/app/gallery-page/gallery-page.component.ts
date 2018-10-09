// TODO - Animation disabled on this page because the gallery viewer
// is set to position: absolute. There is a quirk in Chromium when an ancestor
// element is using transform (angular animations) then the absolute position
// stops at that ancestor instead of the body.
// https://bugs.chromium.org/p/chromium/issues/detail?id=20574
//   @HostBinding('@routeAnimation') routeAnimation = true;
//   @HostBinding('style.display') display = 'block';

import { Component,  AfterViewInit , HostBinding } from '@angular/core';
import { GalleryDefinition } from '../../globals';
import { weddingGalleryDefinitions, bridesGalleryDefinitions, maternityGalleryDefinitions } from '../../globals';
import * as photoSwipeLoader from '../photoswipe-loader';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements AfterViewInit {

  weddingGalleryDefinitions: GalleryDefinition[];
  bridesGalleryDefinitions: GalleryDefinition[];
  maternityGalleryDefinitions: GalleryDefinition[];


  constructor() {
    this.weddingGalleryDefinitions = weddingGalleryDefinitions;
    this.bridesGalleryDefinitions = bridesGalleryDefinitions;
    this.maternityGalleryDefinitions = maternityGalleryDefinitions;
  }

  ngAfterViewInit() {
    this.initialisePhotoswipe();
  }

  initialisePhotoswipe() {
    photoSwipeLoader.initPhotoSwipeFromDOM('.wedding-gallery');
    photoSwipeLoader.initPhotoSwipeFromDOM('.brides-gallery');
    photoSwipeLoader.initPhotoSwipeFromDOM('.maternity-gallery');
  }
}
