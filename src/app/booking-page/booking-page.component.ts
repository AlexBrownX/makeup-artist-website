import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class BookingPageComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('@routeAnimation') routeAnimation = true;

  bookingEndpoint = 'https://us-central1-jana-jurakova-makup-artist.cloudfunctions.net/writeBooking';
  janaEmailAddress = 'jana.jurakova@yahoo.co.uk';

  isSubmitted = false;
  isSending = false;
  hasError = false;

  bookingForm: FormGroup;
  name: String;
  email: String;
  telephone: Number;
  subject: String;
  message: String;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.bookingForm = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      'email': [null, Validators.compose([Validators.required, Validators.maxLength(250), Validators.email])],
      'telephone' : [null, Validators.compose([Validators.maxLength(15)])],
      'subject' : [null, Validators.compose([Validators.maxLength(250)])],
      'message' : [null, Validators.compose([Validators.required, Validators.maxLength(10000)])]
    });
  }

  ngOnInit() { }

  sendBooking(formValue: any): void {
    this.hasError = false;
    this.isSending = true;

    this.http
    .post<any>(this.bookingEndpoint, formValue)
    .subscribe(
      data => {
        // TODO - Remove
        this.isSending = false;
        this.isSubmitted = true;
        console.dir(data);
      },
      (err: HttpErrorResponse) => {
        this.hasError = true;
        this.isSending = false;
        this.isSubmitted = false;

        if (err.error instanceof Error) {
          console.error('A client error occurred:', err.error.message);
        } else {
          console.warn(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
}
