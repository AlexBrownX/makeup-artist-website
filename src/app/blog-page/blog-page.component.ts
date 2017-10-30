import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

import { JsonpModule, Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { ScriptService } from '../script-loader.service';

// TODO - Refactor into blog page with integration with multiple
// social media pages etc.

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  providers: [ScriptService],
  animations: [slideInDownAnimation]
})
export class BlogPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  instagramRootUrl = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
  omitScript = '?OMITSCRIPT=true';
  callbackFlag = '&callback=JSONP_CALLBACK';

  blogUris = [
    'Ba4x9gRnDEm', // Halloween
    'BapDLwmnhLy' // Autumn
  ];

  gallery = [];
  tempGallery = [];
  completeImageFetches = 0;

  constructor(private jsonp: Jsonp, private scriptService: ScriptService) {
    scriptService.loadScript('instagram');
  }

  ngOnInit() {
    this.getInstagramImages();
  }

  getInstagramImages() {
    for (const imageUri of this.blogUris) {
      this.getGalleryImage(imageUri).subscribe(data => {
        this.addImageToGallery(data);
      });
    }
  }

  addImageToGallery(imageData: any) {
    this.tempGallery.push(imageData);
    this.triggerIfAllComplete();
  }

  triggerIfAllComplete() {
    this.completeImageFetches++;

    if (this.completeImageFetches === this.blogUris.length) {
      this.gallery = this.tempGallery;
      this.completeImageFetches = 0;
      this.tempGallery = [];

      this.triggerInstagramApi();
    }
  }

  triggerInstagramApi() {
    if (window['instgrm'] && window['instgrm'].Embeds) {
      window['instgrm'].Embeds.process();
    } else {
      console.log('Tried to start Instagram embedded script but was not found.');
    }
  }

  getGalleryImage(imageUri: string): Observable<any[]> {
    const imageUrl = this.createImageUrl(imageUri);

    // TODO - Load in order
    return this.jsonp.get(imageUrl)
      .map(function(res: Response) {
          return res.json() || {};
      }).catch(function(error: any) {
        return Observable.throw(error);
      });
  }

  createImageUrl(imageUri: string) {
    return this.instagramRootUrl + imageUri + this.omitScript + this.callbackFlag;
  }
}
