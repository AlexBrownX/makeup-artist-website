import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  // https://toddmotto.com/dynamic-page-titles-angular-2-router-events
  ngOnInit() {
    this.hideLoadingSpinner();
    this.listenToRouteChanges();
  }

  hideLoadingSpinner() {
    const loadingSpinner = document.querySelectorAll('.loading');

    for (let i = 0, l = loadingSpinner.length; i < l; i++) {
      loadingSpinner[i].className += loadingSpinner[i].className ? ' hidden' : 'hidden';
    }
  }

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
