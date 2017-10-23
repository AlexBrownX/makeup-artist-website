import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  bookings: Observable<any[]>;

  constructor(fireDatabase: AngularFireDatabase) {
    this.bookings = fireDatabase.list('bookings').valueChanges();
  }

  ngOnInit() {
  }

}
