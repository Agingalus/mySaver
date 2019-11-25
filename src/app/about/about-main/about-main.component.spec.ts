import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMainComponent } from './about-main.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AboutMainComponent', () => {
  let component: AboutMainComponent;
  let fixture: ComponentFixture<AboutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMainComponent],
      imports: [MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
      providers: [NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
