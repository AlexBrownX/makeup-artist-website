import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-return-section',
  templateUrl: './return-section.component.html',
  styleUrls: ['./return-section.component.scss']
})
export class ReturnSectionComponent implements AfterViewInit {

  homescreenLaunch = false;

  constructor() { }

  // Expecting homescreen launches to contain string '?utm_source=homescreen'
  // See manifest.json
  ngAfterViewInit() {
    const howLaunched = window.location.search.substring(1).split('=')[0];

    if (howLaunched === 'homescreen') {
      this.homescreenLaunch = true;
    }
  }
}
