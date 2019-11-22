import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports.component';
import { ReportMainComponent } from './report-main/report-main.component';
import { MatCardModule } from '@angular/material/card';
import { FusionChartsModule } from "angular-fusioncharts";

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReportsComponent,
        ReportMainComponent
      ],
    imports : [
        MatCardModule,
        FusionChartsModule
    ],
      providers: [NgModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
