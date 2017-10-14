import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { AboutMePageComponent } from '../about-me-page/about-me-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { NavigationComponent } from '../navigation/navigation.component';

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
      title: 'About Jana Jurakove Wedding Makeup Artist'
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
    AppComponent,
    WelcomePageComponent,
    AboutMePageComponent,
    NotFoundPageComponent,
    NavigationComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes//,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
