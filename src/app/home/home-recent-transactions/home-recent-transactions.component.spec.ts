import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeRecentTransactionsComponent } from './home-recent-transactions.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';

import { CdkTableModule } from '@angular/cdk/table';
import { Injectable } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material'
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';


describe('RecentTransactionsHomeComponent', () => {
  let component: HomeRecentTransactionsComponent;
  let fixture: ComponentFixture<HomeRecentTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,

        MatTableModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        RouterTestingModule

        //DataSource,
        //CdkTableModule,
        // MatTableDataSource,

        // MatCardModule,
        // MatFormFieldModule,
        // MatInputModule,
        // FormsModule,




      ],
      declarations: [HomeRecentTransactionsComponent],
      providers: [Injectable, NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
