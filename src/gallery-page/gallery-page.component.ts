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

  apiRoot = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/BaUvvg0nOMI/?OMITSCRIPT=true&callback=JSONP_CALLBACK';
  galleryHtml: String;

  constructor(private jsonp: Jsonp) {}

  ngOnInit() {
    this.getGalleryImage().subscribe(data => {
      this.galleryHtml = data['html'];
    });
  }

  getGalleryImage(): Observable<any[]> {
    return this.jsonp.get(this.apiRoot)
      .map(function(res: Response) {
          return res.json() || {};
      }).catch(function(error: any) {
        return Observable.throw(error);
      });
  }
}
