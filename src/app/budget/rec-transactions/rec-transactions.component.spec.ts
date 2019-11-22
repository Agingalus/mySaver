import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecTransactionsComponent } from './rec-transactions.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

describe('RecTransactionsComponent', () => {
  let component: RecTransactionsComponent;
  let fixture: ComponentFixture<RecTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecTransactionsComponent ],
      imports: [
          MatTableModule,
          MatPaginatorModule,
          MatFormFieldModule,
          MatInputModule,
          ReactiveFormsModule,
          MatSelectModule,
          MatCardModule,
          HttpClientTestingModule,
          BrowserAnimationsModule,
          RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
