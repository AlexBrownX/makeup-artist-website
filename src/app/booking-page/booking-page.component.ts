import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class BookingPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor() { }

  ngOnInit() {
    // https://us-central1-jana-jurakova-makup-artist.cloudfunctions.net/writeBooking
  }

  hello() {
    alert('hi');
  }
}
