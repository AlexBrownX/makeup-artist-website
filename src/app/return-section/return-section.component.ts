import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-section',
  templateUrl: './return-section.component.html',
  styleUrls: ['./return-section.component.scss']
})
export class ReturnSectionComponent implements OnInit {

  homescreenLaunch: boolean;

  constructor() { }

  // Expecting homescreen launches to contain string '?utm_source=homescreen'
  // See manifest.json
  ngOnInit() {
    this.homescreenLaunch = window.location.search.substring(1).split('=')[1] === 'homescreen';
  }
}
