import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  galleryHtml: String;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.instagram.com/oembed/?url=http://instagr.am/p/BaUvvg0nOMI?OMITSCRIPT=true').subscribe(data => {
      console.dir(data);
      this.galleryHtml = data['html'];
    });
  }
}
