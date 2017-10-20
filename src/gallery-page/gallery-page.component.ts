import { Component, OnInit } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  instagramRootUrl = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
  omitScript = '?OMITSCRIPT=true';
  callbackFlag = '&callback=JSONP_CALLBACK';

  galleryUris = [
    'BaUvvg0nOMI'// , // Viera Wedding Looking Right
    // 'BaUxkodHKSo', // Viera Closeup Face From Above
    // 'BaXaGQinsGF', // Viera Laying down
    // 'BaXcqmkHfe2' // Viera Chin and Dress
  ];

  galleryHtml: String;
  gallery = [];
  tempGallery = [];
  completeImageFetches = 0;

  constructor(private jsonp: Jsonp) {}

  ngOnInit() {
    this.getInstagramImages();
  }

  getInstagramImages() {
    for (const imageUri of this.galleryUris) {
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

    if (this.completeImageFetches === this.galleryUris.length) {
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
