import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeRecentTransactionsComponent } from './home-recent-transactions/home-recent-transactions.component';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material'
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FusionChartsModule
      ],
      declarations: [
        HomeComponent,
        HomeRecentTransactionsComponent,
        HomeHeaderComponent,
        HomeChartComponent],
      providers: [NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
