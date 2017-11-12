import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// Prevents application from working correctly on IE 10
// https://github.com/firebase/firebase-js-sdk/issues/157
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { SafePipe } from './SafePipe.pipe';
import { ScriptService } from './script-loader.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReturnSectionComponent } from './return-section/return-section.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    AboutMePageComponent,
    GalleryPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    ReturnSectionComponent,
    FooterComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    HttpClientModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})

export class AppModule { }
