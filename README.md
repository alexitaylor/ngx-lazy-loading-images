# NgxLazyImagesApp

> An Angular library that lazy load images with IntersectionObserver API

## Features

* Smart lazy loading logic using [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  * The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport. -MDN
* Speed up initial page loads by loading only images above the fold
* Decreases load time
* Decreases [speed index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)
* Decrease [above the fold time](https://www.globaldots.com/fold-time/)
* Responsive with placeholders

## Getting Started

* First install through npm:

```bash
npm install --save ngx-lazy-loading-images
```

* Import the ***ngx-lazy-loading-images module*** into your ***apps module***:

```typescript
import { NgModule } from '@angular/core';
import { NgxLazyImagesModule } from 'ngx-lazy-loading-images';

@NgModule({
  imports: [
    ...
    NgxLazyImagesModule
  ],
  ...
})
export class AppModule { }
```

* Add ***NgxLazyImagesComponent*** to your view:


### NgxLazyImagesComponent

***What is it?*** - Angular component that lazy loads images with IntersectionObserver 

```html
  <ngx-lazy-images
      [src]="'https://via.placeholder.com/300x300'"
      [height]="'300'"
      [width]="'300'"
  ></ngx-lazy-images>
```

## API

## NgxLazyImagesComponent

#### @Input [config]
##### Intersection observer options

The options object passed into the `[config]` input object is passed into the `IntersectionObserver()` constructor and lets you control the circumstances under which the observer's callback is invoked. It has the following fields:

* ***root***:
  * The element that is used as the viewport for checking visiblity of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

* ***rootMargin***:
  * Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
  
* ***threshold***:
  * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

#### Other @Inputs

Image component working similar with standard `img` tag and with the following props.

| Input                | Type                 | Required | Description                                                                                                                                                                                                       |
| :------------------ | :------------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`               | string               |    ✓     | The image source. eg: 'https://via.placeholder.com/300x300'                                                                                                                                                        |              
| `height`            | number               |          | Image height (Defaults to img src height)                                                                                                                                                                          |
| `width`             | number               |          | Image width (Defaults to img src width)                                                                                                                                                                            |
| `alt`               | string               |          | This attribute defines an alternative text description of the image.                                                                                                                                               |                             
| `placeholder`       | string               |          | Placeholder until image loads. A CSS `background` property, eg: `#3A6073` or `linear-gradient(to right, #4389A2, #5C258D)`. Defaults to `linear-gradient(to right, #3A6073, #16222A)`.                             |                                                                                                             

### Example:

```typescript
  import {Component, OnInit} from '@angular/core';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
    title = 'ngx-lazy-images-app';
    config: IntersectionObserverInit;
  
    ngOnInit(): void {
      const $rootElement = document.querySelector('.container');
      this.config = {
        root: $rootElement,
        rootMargin: '0px 0px 200px 0px'
      };
    }
  }
```

```html
  <ngx-lazy-images
    [src]="'https://via.placeholder.com/300x300'"
    [alt]="'300X300'"
    [config]="config"
    [height]="'300'"
    [width]="300"
  ></ngx-lazy-images>
```  

## Development

* Clone repo
* Install dependencies:

```bash
npm install
```

### Building the Library

* Before we can use ng-surveys library we need to build it:

```bash
ng build ng-surveys
```

* With Angular CLI v6.2 we can use the --watch flag so that every time a file changes Angular CLI performs a partial build that emits the amended files:

```bash
ng build ng-surveys --watch || npm run start:lib
```

* Run the application project (demo app to test our library):

```bash
ng serve || npm run start
```

* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
