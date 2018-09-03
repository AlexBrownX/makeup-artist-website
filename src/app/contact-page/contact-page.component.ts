import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as globalVars from '../../globals';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [slideInDownAnimation]
})
export class ContactPageComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('@routeAnimation') routeAnimation = true;

  dbEndpoint = 'https://us-central1-jana-jurakova-makup-artist.cloudfunctions.net/writeBooking';
  emailAddress = globalVars.contact.emailAddress;

  isSubmitting = false;
  isSubmitted = false;
  hasError = false;

  contactForm: FormGroup;
  name: String;
  email: String;
  telephone: Number;
  subject: String;
  message: String;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      'name' : [null, Validators.compose([Validators.required, Validators.maxLength(250)])],
      'email': [null, Validators.compose([Validators.required, Validators.maxLength(250), Validators.email])],
      'telephone' : [null, Validators.compose([Validators.maxLength(15)])],
      'subject' : [null, Validators.compose([Validators.maxLength(250)])],
      'message' : [null, Validators.compose([Validators.required, Validators.maxLength(10000)])]
    });
  }

  ngOnInit() { }

  sendContactForm(contactForm: FormGroup): void {
    this.hasError = false;
    this.isSubmitting = true;

    this.http
    .post<any>(this.dbEndpoint, contactForm.value)
    .subscribe(
      data => {
        this.isSubmitted = true;
        this.isSubmitting = true;
      },
      (err: HttpErrorResponse) => {
        contactForm.enable();
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
