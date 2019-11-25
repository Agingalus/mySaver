import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderComponent } from './home-header.component';

import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';


// describe('HomeHeaderComponent', () => {
//   let component: HomeHeaderComponent;
//   let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableDataSource,
        FormsModule,

        BrowserAnimationsModule

      ],
      declarations: [HomeHeaderComponent],
      providers: [NgModule]
    })
      .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeHeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
