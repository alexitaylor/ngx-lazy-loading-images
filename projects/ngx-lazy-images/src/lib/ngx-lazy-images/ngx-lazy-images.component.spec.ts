import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLazyImagesComponent } from './ngx-lazy-images.component';

describe('NgxLazyImagesComponent', () => {
  let component: NgxLazyImagesComponent;
  let fixture: ComponentFixture<NgxLazyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLazyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLazyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
