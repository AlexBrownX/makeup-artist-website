import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Routes, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

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

  // https://toddmotto.com/dynamic-page-titles-angular-2-router-events
  listenToRouteChanges() {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}

