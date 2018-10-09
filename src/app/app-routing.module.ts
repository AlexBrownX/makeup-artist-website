import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Routes, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PricesPageComponent } from './prices-page/prices-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';

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
  path: 'testimonials',
  component: TestimonialsPageComponent,
  data: {
    title: 'Testimonials'
  }
}, {
  path: 'prices',
  component: PricesPageComponent,
  data: {
    title: 'Prices'
  }
}, {
  path: 'blog',
  component: BlogPageComponent,
  data: {
    title: 'Blog'
  }
}, {
  path: 'contact',
  component: ContactPageComponent,
  data: {
    title: 'Contact me'
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.listenToRouteChanges();
  }

  listenToRouteChanges() {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => {
          return {'route': this.activatedRoute, 'event': event};
        }),
        map((routeAndEvent) => {
          while (routeAndEvent.route.firstChild) {
            routeAndEvent.route = routeAndEvent.route.firstChild;
          }
          return {'route': routeAndEvent.route, 'event': routeAndEvent.event};
        }),
        filter((routeAndEvent) => routeAndEvent.route.outlet === 'primary'),
        mergeMap((routeAndEvent) => {
          return routeAndEvent.route.data.pipe(
            map(routeData => {
              return {'data': routeData, 'event': routeAndEvent.event};
            })
          );
        })
      )
      .subscribe((routeAndEvent) => {
        this.setPageTitle(routeAndEvent.data['title']);
        this.scrollTopOfWindow();
        this.sendAnalyticsPageEvent(routeAndEvent.event['urlAfterRedirects']);
      });
  }

  private setPageTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  private scrollTopOfWindow(): void {
    window.scrollTo(0, 0);
  }

  // TODO - Refactor into analytics service
  private sendAnalyticsPageEvent(urlAfterRedirects: string): void {
    if ('ga' in window) {
      const tracker = (<any>window).ga.getAll()[0];

      if (tracker) {
        tracker.set('page', urlAfterRedirects);
        tracker.send('pageview');
      }
    }
  }
}
