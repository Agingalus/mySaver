import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FusionChartsModule } from "angular-fusioncharts";
import { ReportMainComponent } from './report-main.component';
import { MatCardModule } from '@angular/material/card';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


describe('ReportMainComponent', () => {
  let component: ReportMainComponent;
  let fixture: ComponentFixture<ReportMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          ReportMainComponent ],
      imports : [
          MatCardModule,
          FusionChartsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
