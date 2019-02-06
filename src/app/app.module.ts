import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxLazyImagesModule } from 'ngx-lazy-images';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLazyImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
