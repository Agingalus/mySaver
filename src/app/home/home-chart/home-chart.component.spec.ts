import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartComponent } from './home-chart.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material'
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);



describe('HomeChartComponent', () => {
  let component: HomeChartComponent;
  let fixture: ComponentFixture<HomeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        BrowserAnimationsModule,

        MatTableModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FusionChartsModule
      ],
      declarations: [HomeChartComponent],
      providers: [NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
