import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionPageAddComponent } from './transactionpage-add/transactionpage-add.component';
import { TransactionPageComponent } from './transactionpage.component';
import { TransactionPageHistoryComponent } from './transactionpage-history/transactionpage-history.component';
import { NgModule } from '@angular/core';
import { transactionPageButtonsComponent } from './transactionpage-buttons/transactionpage-buttons.component';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
//import { MatFormFieldControl } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



describe('TransactionPageComponent', () => {
  let component: TransactionPageComponent;
  let fixture: ComponentFixture<TransactionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        RouterModule.forRoot([{ path: "", component: TransactionPageComponent }]),
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        TransactionPageComponent,
        TransactionPageAddComponent,
        TransactionPageHistoryComponent,
        transactionPageButtonsComponent
      ],
      providers: [NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
