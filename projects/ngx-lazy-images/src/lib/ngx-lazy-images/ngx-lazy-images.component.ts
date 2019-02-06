import {
  Component,
  ViewChild,
  Input,
  AfterViewInit,
  ElementRef, OnInit
} from '@angular/core';

/**
 * The Intersection Observer API provides a way to asynchronously observe changes in the
 * intersection of a target element with an ancestor element or with a top-level document’s
 * viewport. -MDN
 *
 *
 * The actual detection implementation doesn’t run on the main thread. However, the callback for
 * when an intersection has been triggered does run on the main thread so keep it light!
 *
 * The rootMargin option takes in a string that conforms to the regular CSS margin rule.
 * Here we are telling to increase the bottom dectin boundry by 200px. Meaning the
 * intersection callback will be triggered once the user arrivers at the bottom of the root
 * element +200px (default is 0).
 * */

@Component({
  selector: 'ngx-lazy-images',
  templateUrl: './ngx-lazy-images.component.html',
  styleUrls: []
})
export class NgxLazyImagesComponent implements AfterViewInit, OnInit {
  @ViewChild('lazyImage') lazyImageEl: ElementRef;

  // Image Meta Data
  @Input() height: number;
  @Input() width: number;

  @Input() src: string;
  @Input() alt = 'Lazy Loaded Image';
  @Input() placeholder: string;

  defaultConfig = {
    rootMargin: '0px 0px',
  };

  @Input() config: IntersectionObserverInit = this.defaultConfig;

  observer: IntersectionObserver;
  isImgLoaded: boolean;

  defaultPlaceholder: any;

  visibilityHidden = { visibility: 'hidden' };

  constructor() { }

  ngOnInit(): void {
    this.initPlaceholder();
    this.height = this.height || 0;
    this.width = this.width || 0;
  }

  ngAfterViewInit() {
    this.observer = this.initIntersectionObserver();
    this.observer.observe(this.lazyImageEl.nativeElement);
  }

  initIntersectionObserver(): IntersectionObserver {
    return new IntersectionObserver(
      entries => {
        this.onIntersection(entries);
      },
      {
        ...this.config,
      }
    );
  }

  // Callback is executed on the main thread, it should operate as quickly as possible.
  onIntersection(entries: IntersectionObserverEntry[], observer?: any) {
    entries.forEach(entry => {
      this.imageLoader(entry);
    });
  }

  imageLoader(entry: IntersectionObserverEntry) {
    const { isIntersecting, target } = entry;

    try {
      const image = new Image();

      if (!this.src) {
        console.error('Lazy image element returned empty image source', target);
        return;
      }

      if (isIntersecting) {
        this.fetchImageMeta(image, this.src)
          .then(() => {
            this.height = this.height || image.height;
            this.width = this.width || image.width;
            this.lazyImageEl.nativeElement.src = image.src;
            this.isImgLoaded = true;
            this.observer.disconnect();
          })
          .catch((err) => {
            console.error(`Fetching image meta data failed with ${target}`, err);
          });
      }
    } catch (exception) {
      console.error(`Image loader failed with ${target}`, exception);
    }
  }

  fetchImageMeta(image: HTMLImageElement, src: string): Promise<any> {
    return new Promise((resolve, error) => {
      image.src = src;
      image.onload = resolve; // eslint-disable-line no-param-reassign
      image.onerror = error; // eslint-disable-line no-param-reassign
    });
  }

  initPlaceholder() {
    this.defaultPlaceholder = {
      'position': 'relative',
      'width': '100%',
      'height': '100%',
      'background-color': '#3A6073',
      'background': this.placeholder ? this.placeholder : 'linear-gradient(to right, #3A6073, #16222A)',
      /* blur filters */
      '-webkit-filter': 'blur(5px)',
      '-o-filter': 'blur(5px)',
      'filter': 'blur(5px)',
    };
  }

}
