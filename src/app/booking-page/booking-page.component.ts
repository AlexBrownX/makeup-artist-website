import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

// import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class BookingPageComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('@routeAnimation') routeAnimation;

  bookingEndpoint = 'https://us-central1-jana-jurakova-makup-artist.cloudfunctions.net/writeBooking';

  bookingForm: FormGroup;

  // Toggles the form or success message
  isSubmitted = false;

  // Toggles error message
  hasError = false;

  name: String;
  email: String;
  telephone: Number;
  subject: String;
  message: String;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    // [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
   // 'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    this.bookingForm = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      'email': [null, Validators.compose([Validators.required, Validators.maxLength(250), Validators.email])],
      'telephone' : [null, Validators.compose([Validators.maxLength(15)])],
      'subject' : [null, Validators.compose([Validators.maxLength(250)])],
      'message' : [null, Validators.compose([Validators.required, Validators.maxLength(10000)])]
    });
  }

  ngOnInit() {
  }

  sendBooking(value: any): void {
    this.hasError = false;

    this.http
    .post<any>(this.bookingEndpoint, value)
    .subscribe(
      data => {
        this.isSubmitted = true;
      },
      (err: HttpErrorResponse) => {
        this.hasError = true;
        // TODO - Show server errors - validation etc.

        if (err.error instanceof Error) {
          console.error('A client error occurred:', err.error.message);
        } else {
          console.warn(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
}
