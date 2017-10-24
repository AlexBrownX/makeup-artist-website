import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const appRoutes: Routes = [{
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
    path: 'blog',
    component: BlogPageComponent,
    data: {
        title: 'Blog'
    }
}, {
    path: 'bookings',
    component: BookingPageComponent,
    data: {
        title: 'Booking'
    }
}, {
    path: 'review',
    component: ReviewPageComponent,
    data: {
        title: 'Review'
    }
}, {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
}, {
    path: '**',
    component: NotFoundPageComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes// ,
            // { enableTracing: true } // debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
