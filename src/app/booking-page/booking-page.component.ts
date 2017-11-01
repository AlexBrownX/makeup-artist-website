import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SafePipe } from '../SafePipe.pipe';

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

  isSubmitting = false;
  isSubmitted = false;
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

/*
TODO - Think about safe pipe... is it just sticky tape for the UI ?
Secure the service.

import { DatePipe } from '@angular/common';
class MyService {

  constructor(private datePipe: DatePipe) {}

  transformDate(date) {
    new DatePipe().transform(myDate, 'yyyy-MM-dd');
    this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator
*/

  sendBooking(bookingForm: FormGroup): void {
    this.hasError = false;
    this.isSubmitting = true;

    this.http
    .post<any>(this.bookingEndpoint, bookingForm.value)
    .subscribe(
      data => {
        this.isSubmitted = true;
        this.isSubmitting = true;
      },
      (err: HttpErrorResponse) => {
        bookingForm.enable();
        this.hasError = true;
        this.isSubmitted = false;
        this.isSubmitting = false;

        if (err.error instanceof Error) {
          console.error('A client error occurred:', err.error.message);
        } else {
          console.warn(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
}
