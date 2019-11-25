import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SettingsComponent } from './settings.component';
import { SettingsCardComponent } from './settings-card/settings-card.component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



// describe('SettingsComponent', () => {
//   let component: SettingsComponent;
//   let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [ 
        SettingsComponent,
        ProfileCardComponent,
        SettingsCardComponent
       ],
      providers: [NgModule]
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SettingsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



/*
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
        //MatTableDataSource,
        FormsModule,
        DataSource,
        MatTableModule,
        MatPaginator

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
  */
