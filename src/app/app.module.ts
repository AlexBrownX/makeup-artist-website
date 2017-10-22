import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { SafePipe } from './SafePipe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReturnSectionComponent } from './return-section/return-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    AboutMePageComponent,
    GalleryPageComponent,
    BookingPageComponent,
    NotFoundPageComponent,
    ReturnSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
