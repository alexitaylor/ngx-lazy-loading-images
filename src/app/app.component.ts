import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-lazy-images-app';
  config: IntersectionObserverInit;
  placeholderOne: string;
  placeHolderTwo: string;

  ngOnInit(): void {
    this.placeholderOne = 'linear-gradient(to right, #4389A2, #5C258D)';
    this.placeHolderTwo = '#3A6073';
    const $rootElement = document.querySelector('.container');
    this.config = {
      root: $rootElement,
      rootMargin: '0px 0px 100px 0px'
    };
  }
}
