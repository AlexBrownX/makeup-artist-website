import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';

import { SafePipe } from '../SafePipe.pipe';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { AboutMePageComponent } from '../about-me-page/about-me-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryPageComponent } from '../gallery-page/gallery-page.component';
import { ReturnSectionComponent } from '../return-section/return-section.component';
import { BookingPageComponent } from '../booking-page/booking-page.component';


const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    data: {
      title: 'Jana Jurakove Wedding Makeup Artist'
    }
  }, {
    path: 'about-me',
    component: AboutMePageComponent,
    data: {
      title: 'About Jana'
    }
  }, {
    path: 'gallery',
    component: GalleryPageComponent,
    data: {
      title: 'Gallery'
    }
  }, {
    path: 'bookings',
    component: BookingPageComponent,
    data: {
      title: 'Booking'
    }
  }, {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    WelcomePageComponent,
    AboutMePageComponent,
    NotFoundPageComponent,
    NavigationComponent,
    FooterComponent,
    GalleryPageComponent,
    ReturnSectionComponent,
    BookingPageComponent
],
  imports: [
    BrowserModule,
    JsonpModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
