import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.hideLoadingSpinner();
  }

  hideLoadingSpinner() {
    const loadingSpinner = document.querySelectorAll('.loading');

    for (let i = 0, l = loadingSpinner.length; i < l; i++) {
      loadingSpinner[i].className += loadingSpinner[i].className ? ' hidden' : 'hidden';
    }
  }
}
