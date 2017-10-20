import { Component, OnInit } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // https://us-central1-jana-jurakova-makup-artist.cloudfunctions.net/writeBooking
  }

}
