import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLazyImagesComponent } from './ngx-lazy-images/ngx-lazy-images.component';

@NgModule({
  declarations: [NgxLazyImagesComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxLazyImagesComponent]
})
export class NgxLazyImagesModule { }
